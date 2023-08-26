import { Hero } from "$/utils/getHeros";
import { makeAutoObservable } from "mobx";

const write = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export class Heros {
  heros: Hero[] = [];
  favorites: number[] = [];
  search = "";
  collapsed = false;
  likedRecentlyId: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setHeros(heros: Hero[]) {
    this.heros = heros;
  }

  like(id: number) {
    this.favorites = [...this.favorites, id];
    this.likedRecentlyId = id;
    write("favorites", this.favorites);
  }

  unlike(id: number) {
    this.favorites = this.favorites.filter((idx) => idx != id);
    this.likedRecentlyId = this.favorites.at(-1) || null;
    write("favorites", this.favorites);
  }

  setFavorites(...ids: number[]) {
    this.favorites = ids;
    this.likedRecentlyId = this.favorites.at(-1) || null;
  }

  getFavorites() {
    return this.favorites.map(
      (idx) => this.heros.find((h) => h.id == idx) as Hero
    );
  }

  getHeros() {
    return this.heros.filter(
      (h) =>
        !this.favorites.includes(h.id) &&
        (h.name.toLowerCase().includes(this.search.toLowerCase()) ||
          h.biography.fullName
            .toLowerCase()
            .includes(this.search.toLowerCase()))
    );
  }

  setSearch(value: string) {
    this.search = value;
  }

  setCollapsed(value: boolean) {
    this.collapsed = value;
    write("collapsed", this.collapsed);
  }
}

const heros = new Heros();

export { heros };

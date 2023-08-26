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

  constructor() {
    makeAutoObservable(this);
  }

  setHeros(heros: Hero[]) {
    this.heros = heros;
  }

  like(id: number) {
    this.favorites = [id, ...this.favorites];
    write("favorites", this.favorites);
  }

  unlike(id: number) {
    this.favorites = this.favorites.filter((idx) => idx != id);
    write("favorites", this.favorites);
  }

  setFavorites(...ids: number[]) {
    this.favorites = ids;
    write("favorites", this.favorites);
  }

  getFavorites() {
    return this.heros.filter((h) => this.favorites.includes(h.id));
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

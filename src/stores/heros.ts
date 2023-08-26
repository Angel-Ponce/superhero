import { Hero } from "$/utils/getHeros";
import { makeAutoObservable } from "mobx";

export class Heros {
  heros: Hero[] = [];
  favorites: number[] = [];
  search = "";

  constructor() {
    makeAutoObservable(this);
  }

  setHeros(heros: Hero[]) {
    this.heros = heros;
  }

  like(id: number) {
    this.favorites = [id, ...this.favorites];
  }

  unlike(id: number) {
    this.favorites = this.favorites.filter((idx) => idx != id);
  }

  setFavorites(...ids: number[]) {
    this.favorites = ids;
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
}

const heros = new Heros();

export { heros };

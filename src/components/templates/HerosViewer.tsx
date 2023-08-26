"use client";

import { observer } from "mobx-react-lite";
import { AllSuperHeros, FavoriteHeros } from "../organisms";
import { Heros as HerosClass, heros } from "$/stores/heros";
import { FC, useEffect } from "react";
import { Hero } from "$/utils/getHeros";

const HerosObservable = observer(({ heros }: { heros: HerosClass }) => (
  <>
    <FavoriteHeros heros={heros.getFavorites()} collapsed={heros.collapsed} />
    <AllSuperHeros heros={heros.getHeros()} search={heros.search} />
  </>
));

const HerosViewer: FC<{ allHeros: Hero[] }> = ({ allHeros }) => {
  useEffect(() => {
    heros.setHeros(allHeros);
    heros.setCollapsed(
      localStorage.getItem("collapsed") == "false" ? false : true
    );
    const favorites = localStorage.getItem("favorites") || "";
    heros.setFavorites(
      ...favorites
        .split(",")
        .filter((n) => !Number.isNaN(n))
        .map((n) => Number(n))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <HerosObservable heros={heros} />;
};

export default HerosViewer;

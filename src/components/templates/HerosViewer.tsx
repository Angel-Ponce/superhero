"use client";

import { observer } from "mobx-react-lite";
import { AllSuperHeros, FavoriteHeros } from "../organisms";
import { Heros as HerosClass, heros } from "$/stores/heros";
import { FC } from "react";
import { Hero } from "$/utils/getHeros";

const HerosObservable = observer(({ heros }: { heros: HerosClass }) => (
  <>
    <FavoriteHeros heros={heros.getFavorites()} />
    <AllSuperHeros heros={heros.getHeros()} />
  </>
));

const HerosViewer: FC<{ allHeros: Hero[] }> = ({ allHeros }) => {
  heros.setHeros(allHeros);

  return <HerosObservable heros={heros} />;
};

export default HerosViewer;

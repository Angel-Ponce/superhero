"use client";

import { getHeroPower } from "$/utils";
import { Hero } from "$/utils/getHeros";
import Image from "next/image";
import { FC } from "react";
import { Button } from "../atoms";
import HeartButton from "../atoms/HeartButton";
import { heros as storedHeros } from "$/stores/heros";

const HeroCard: FC<{
  hero: Hero;
  liked?: boolean;
  likedRecently?: boolean;
}> = ({ hero, liked = false, likedRecently = false }) => {
  const toggleLike = () => {
    if (liked) {
      storedHeros.unlike(hero.id);
      return;
    }

    setTimeout(() => {
      const container = document.getElementById("favorites-virtualized-grid");
      container?.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }, 0);

    storedHeros.like(hero.id);
  };

  return (
    <div
      className={`w-full h-full rounded-[16px] p-4 flex gap-4 items-start relative bg-[rgba(54,44,106,0.65)]`}
    >
      {likedRecently && (
        <div className="absolute -top-1 -right-1 bg-purple rounded-[6px] text-[10px] p-1">
          Liked recently
        </div>
      )}
      <div className="relative">
        <Image
          src={hero.images.lg}
          alt={hero.name}
          className="rounded-[12px]"
          width={105}
          height={140}
        />
        <Button
          onClick={toggleLike}
          className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-purple flex items-center justify-center"
        >
          <HeartButton size="medium" filled={liked} />
        </Button>
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <h3 className="font-bold text-xl">{hero.name}</h3>
        <p className="font-normal text-xs text-white text-opacity-50">
          Real name: {hero.biography.fullName}
        </p>
        <div className="flex gap-1 itemx-center text-xs">
          <Image src="/fist.svg" width={18} height={18} alt="fist" />
          <b>{getHeroPower(hero)}</b>
          <p className="font-light text-white text-opacity-50">/ 10</p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-clip z-[-1] rounded-[16px]">
        <div className="absolute top-0 left-0 w-full h-full blur-[13.5px] z-[-1]">
          <Image
            className="object-center object-cover rounded-[16px]"
            src={hero.images.lg}
            alt={hero.name}
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

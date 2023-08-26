"use client";

import Image from "next/image";
import HeartButton from "../atoms/HeartButton";
import { Button, Placeholder } from "../atoms";
import { FC, useState } from "react";
import clsx from "clsx";
import { Hero } from "$/utils/getHeros";
import { HeroCard } from "../molecules";

const FavoriteHeros: FC<{ heros: Hero[] }> = ({ heros }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section
      className={clsx(
        "w-full flex flex-col gap-8 p-4 rounded-[16px] border-[#6A4DBC70] border ease-ease transition-all duration-300 h-[282px]",
        collapsed &&
          "bg-[rgba(106,77,188,0.28)] !h-[74px] min-h-[74px] overflow-hidden"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-9 h-9 rounded-full bg-purple flex justify-center items-center">
            <HeartButton size="small" />
          </div>
          <h2 className="font-bold text-[28px]">Liked</h2>
        </div>
        <Button
          onClick={() => setCollapsed((c) => !c)}
          className="w-10 h-10 rounded-full flex justify-center items-center bg-[rgba(255,255,255,0.10)]"
        >
          <Image
            src="/arrow-up.svg"
            alt="arrow-up"
            width={24}
            height={24}
            className={clsx(collapsed && "-rotate-180", "duration-300")}
          />
        </Button>
      </div>
      {heros.length == 0 && (
        <Placeholder
          className={clsx(collapsed ? "hidden" : "block")}
          icon={<HeartButton size="big" />}
          text="You haven’t liked any superhero yet"
        />
      )}
      {heros.length > 0 && (
        <div
          className={clsx(
            "w-full items-center flex-wrap gap-[15px] max-h-[200px] overflow-y-auto",
            collapsed ? "hidden" : "flex"
          )}
        >
          {heros.map((h) => (
            <HeroCard liked key={h.id} hero={h}></HeroCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default FavoriteHeros;

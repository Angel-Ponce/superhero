"use client";

import { FC, useEffect, useState } from "react";
import { SearchInput } from "../atoms";
import { Hero } from "$/utils/getHeros";
import { HeroCard } from "../molecules";
import clsx from "clsx";
import { heros as storedHeros } from "$/stores/heros";

const AllSuperHeros: FC<{ heros: Hero[] }> = ({ heros }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    storedHeros.setSearch(search);
  }, [search]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between gap-5 flex-wrap">
        <h2 className="font-bold text-[28px] whitespace-nowrap">
          All superheros
        </h2>
        <div className="flex-1 max-w-[355px] min-w-[150px]">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            onCancel={() => setSearch("")}
          />
        </div>
      </div>
      <div
        className={clsx(
          "w-full flex flex-wrap items-center gap-[15px] max-h-[467px] overflow-y-auto",
          heros.length >= 4 ? "justify-center" : "justify-normal"
        )}
      >
        {heros.map((h) => (
          <HeroCard key={h.id} hero={h}></HeroCard>
        ))}
      </div>
    </div>
  );
};

export default AllSuperHeros;

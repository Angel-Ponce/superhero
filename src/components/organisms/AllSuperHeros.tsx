"use client";

import { FC, useState } from "react";
import { SearchInput } from "../atoms";
import { Hero } from "$/utils/getHeros";
import { HeroCard } from "../molecules";

const AllSuperHeros: FC<{ heros: Hero[] }> = ({ heros }) => {
  const [search, setSearch] = useState("");

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
      <div className="w-full justify-center items-center flex flex-wrap gap-[15px]">
        {heros.map((h) => (
          <HeroCard key={h.id} hero={h}></HeroCard>
        ))}
      </div>
    </div>
  );
};

export default AllSuperHeros;

"use client";

import { FC, useEffect, useState } from "react";
import { SearchInput } from "../atoms";
import { Hero } from "$/utils/getHeros";
import { HeroCard } from "../molecules";
import clsx from "clsx";
import { heros as storedHeros } from "$/stores/heros";
import { AutoSizer, Grid } from "react-virtualized";

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
      <AutoSizer>
        {({ width }) => (
          <Grid
            columnWidth={300}
            rowHeight={204}
            columnCount={4}
            rowCount={Math.ceil(heros.length / 4)}
            width={width}
            height={204 * 3.2}
            cellRenderer={({ key, rowIndex, columnIndex, style }) => (
              <div key={key} style={{ ...style, padding: "7.5px" }}>
                {heros[columnIndex + rowIndex * 4] && (
                  <HeroCard hero={heros[columnIndex + rowIndex * 4]} />
                )}
              </div>
            )}
            style={{
              paddingLeft: `${(width - 300 * 4) / 2}px`,
            }}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default AllSuperHeros;

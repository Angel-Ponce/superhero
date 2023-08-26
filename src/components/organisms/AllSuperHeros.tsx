"use client";

import { FC } from "react";
import { SearchInput } from "../atoms";
import { Hero } from "$/utils/getHeros";
import { HeroCard } from "../molecules";
import { heros as storedHeros } from "$/stores/heros";
import { AutoSizer, Grid } from "react-virtualized";

const AllSuperHeros: FC<{ heros: Hero[]; search: string }> = ({
  heros,
  search = "",
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between gap-5 flex-wrap">
        <h2 className="font-bold text-[28px] whitespace-nowrap">
          All superheros
        </h2>
        <div className="flex-1 max-w-[355px] min-w-[150px]">
          <SearchInput
            value={search}
            onChange={(e) => storedHeros.setSearch(e.currentTarget.value)}
            onCancel={() => storedHeros.setSearch("")}
          />
        </div>
      </div>
      <AutoSizer>
        {({ width }) => (
          <Grid
            columnWidth={300}
            rowHeight={189}
            columnCount={Math.floor(width / 305) || 1}
            rowCount={Math.ceil(heros.length / (Math.floor(width / 305) || 1))}
            width={width}
            height={189 * 3.2}
            cellRenderer={({ key, rowIndex, columnIndex, style }) => (
              <div key={key} style={{ ...style, padding: "7.5px" }}>
                {heros[
                  columnIndex + rowIndex * (Math.floor(width / 305) || 1)
                ] && (
                  <HeroCard
                    hero={
                      heros[
                        columnIndex + rowIndex * (Math.floor(width / 305) || 1)
                      ]
                    }
                  />
                )}
              </div>
            )}
            style={{
              paddingLeft: `${
                (width - 300 * (Math.floor(width / 305) || 1)) / 2
              }px`,
            }}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default AllSuperHeros;

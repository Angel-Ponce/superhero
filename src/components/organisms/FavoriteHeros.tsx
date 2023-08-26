"use client";

import Image from "next/image";
import HeartButton from "../atoms/HeartButton";
import { Button, Placeholder } from "../atoms";
import { FC } from "react";
import clsx from "clsx";
import { Hero } from "$/utils/getHeros";
import { HeroCard } from "../molecules";
import { AutoSizer, Grid } from "react-virtualized";
import { heros as storedHeros } from "$/stores/heros";

const FavoriteHeros: FC<{ heros: Hero[]; collapsed: boolean }> = ({
  heros,
  collapsed = false,
}) => {
  return (
    <section
      className={clsx(
        "w-full flex flex-col gap-8 p-4 rounded-[16px] border-[#6A4DBC70] border ease-ease transition-all duration-300 h-[312px]",
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
          onClick={() => storedHeros.setCollapsed(!collapsed)}
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

      <div className="w-full max-h-[204px]">
        {heros.length > 0 && (
          <AutoSizer>
            {({ width }) => (
              <Grid
                columnWidth={300}
                rowHeight={204}
                columnCount={4}
                rowCount={Math.ceil(heros.length / 4)}
                width={width}
                height={204}
                cellRenderer={({ key, rowIndex, columnIndex, style }) => (
                  <div key={key} style={{ ...style, padding: "7.5px" }}>
                    {heros[columnIndex + rowIndex * 4] && (
                      <HeroCard
                        liked
                        hero={heros[columnIndex + rowIndex * 4]}
                        likedRecently={columnIndex == 0 && rowIndex == 0}
                      />
                    )}
                  </div>
                )}
              />
            )}
          </AutoSizer>
        )}
      </div>
    </section>
  );
};

export default FavoriteHeros;

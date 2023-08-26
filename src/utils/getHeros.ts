/**
 * To populate all types use the following api reference:
 * https://akabab.github.io/superhero-api/api/#id
 */

import wait from "wait";

export interface Images {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export interface Biography {
  fullName: string;
}

export interface PowerStats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export interface Hero {
  id: number;
  name: string;
  slug: string;
  powerstats: PowerStats;
  biography: Biography;
  images: Images;
}

const getHeros = async (): Promise<Hero[] | null> => {
  const res = await fetch(process.env.API_URL);

  const data = await res.json();

  await wait(5000);

  return data;
};

export { getHeros };

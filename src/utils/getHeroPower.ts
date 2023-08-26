import { Hero } from "./getHeros";

const getHeroPower = (hero: Hero) => {
  const media =
    (hero.powerstats.combat +
      hero.powerstats.durability +
      hero.powerstats.intelligence +
      hero.powerstats.power +
      hero.powerstats.speed +
      hero.powerstats.strength) /
    6;

  const power = media / 10;

  return Number(power.toFixed(2));
};

export { getHeroPower };

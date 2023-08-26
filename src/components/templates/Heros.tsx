import { getHeros } from "$/utils";
import { AllSuperHeros, FavoriteHeros } from "../organisms";

const Heros = async () => {
  const heros = await getHeros();

  return (
    <>
      <FavoriteHeros />
      <AllSuperHeros />
    </>
  );
};

export default Heros;

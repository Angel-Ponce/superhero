import { getHeros } from "$/utils";
import { SearchInput } from "../atoms";
import { AllSuperHeros, FavoriteHeros } from "../organisms";

const Heros = async () => {
  const heros = await getHeros();

  return (
    <>
      <FavoriteHeros />
      <SearchInput></SearchInput>
      <AllSuperHeros />
    </>
  );
};

export default Heros;

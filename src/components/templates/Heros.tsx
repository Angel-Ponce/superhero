import { getHeros } from "$/utils";
import { FavoriteHeros } from "../organisms";

const Heros = async () => {
  const heros = await getHeros();

  return (
    <>
      <FavoriteHeros />
    </>
  );
};

export default Heros;

import { getHeros } from "$/utils";

const Heros = async () => {
  const heros = await getHeros();

  return <div>{JSON.stringify(heros)}</div>;
};

export default Heros;

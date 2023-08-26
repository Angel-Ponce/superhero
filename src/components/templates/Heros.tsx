import { getHeros } from "$/utils";
import HerosViewer from "./HerosViewer";

const Heros = async () => {
  const allHeros = await getHeros();

  return <HerosViewer allHeros={allHeros || []} />;
};

export default Heros;

import { Skeleton } from "$/components/atoms";

const Loading = () => {
  return (
    <div className="flex flex-col gap-14">
      <section className="flex flex-col gap-[15px]">
        <Skeleton width={285} height={27}></Skeleton>
        <div className="flex gap-[15px] flex-wrap justify-center">
          {new Array(4).fill(0).map((_o, i) => (
            <Skeleton key={i} width={285} height={174}></Skeleton>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-[15px]">
        <Skeleton width={285} height={27}></Skeleton>
        <div className="flex gap-[15px] flex-wrap justify-center">
          {new Array(8).fill(0).map((_o, i) => (
            <Skeleton key={i} width={285} height={174}></Skeleton>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Loading;

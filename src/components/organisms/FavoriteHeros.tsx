import Image from "next/image";
import HeartButton from "../atoms/HeartButton";

const FavoriteHeros = () => {
  return (
    <section className="w-full p-4 rounded-[16px] border-[rgba(106,77,188,0.44)] border">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-9 h-9 rounded-full bg-purple flex justify-center items-center">
            <HeartButton size="small" />
          </div>
          <h2 className="font-bold text-[28px]">Liked</h2>
        </div>
        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[rgba(255,255,255,0.10)]">
          <Image src="/arrow-up.svg" alt="arrow-up" width={24} height={24} />
        </div>
      </div>
    </section>
  );
};

export default FavoriteHeros;

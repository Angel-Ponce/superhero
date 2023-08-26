import Image from "next/image";
import HeartButton from "../atoms/HeartButton";
import { Button, Placeholder } from "../atoms";

const FavoriteHeros = () => {
  return (
    <section className="w-full p-4 rounded-[16px] border-[#6A4DBC70] border">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-9 h-9 rounded-full bg-purple flex justify-center items-center">
            <HeartButton size="small" />
          </div>
          <h2 className="font-bold text-[28px]">Liked</h2>
        </div>
        <Button className="w-10 h-10 rounded-full flex justify-center items-center bg-[rgba(255,255,255,0.10)]">
          <Image src="/arrow-up.svg" alt="arrow-up" width={24} height={24} />
        </Button>
      </div>
      <Placeholder
        icon={<HeartButton size="big" />}
        text="You haven’t liked any superhero yet"
      />
    </section>
  );
};

export default FavoriteHeros;

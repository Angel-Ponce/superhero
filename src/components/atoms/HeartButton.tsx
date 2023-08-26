import Image from "next/image";
import { FC } from "react";

const HeartButton: FC<{
  size: "small" | "medium" | "big";
  filled?: boolean;
}> = ({ size, filled = false }) => {
  if (filled)
    return (
      <Image
        src="/medium-filled-heart.svg"
        alt="medium-filled-heart"
        width={16}
        height={16}
      />
    );

  if (size == "small")
    return (
      <Image src="/small-heart.svg" alt="small-heart" width={13} height={13} />
    );

  if (size == "medium")
    return (
      <Image
        src="/medium-heart.svg"
        alt="medium-heart"
        width={17}
        height={17}
      />
    );

  if (size == "big")
    return (
      <Image src="/big-heart.svg" alt="big-heart" width={36} height={36} />
    );
};

export default HeartButton;

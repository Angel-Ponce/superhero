import clsx from "clsx";
import { FC, ReactNode } from "react";

const Placeholder: FC<{
  icon: ReactNode;
  text: string;
  className?: string;
}> = ({ icon, text, className = "" }) => {
  return (
    <div
      className={clsx(
        "w-full flex flex-col gap-4 items-center justify-center my-12",
        className
      )}
    >
      {icon}
      {text}
    </div>
  );
};

export default Placeholder;

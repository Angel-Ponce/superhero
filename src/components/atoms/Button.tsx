"use client";

import clsx from "clsx";
import { FC, MouseEventHandler, ReactNode } from "react";

const Button: FC<{
  children: ReactNode;
  className: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(className, "active:scale-75 duration-300")}
    >
      {children}
    </button>
  );
};

export default Button;

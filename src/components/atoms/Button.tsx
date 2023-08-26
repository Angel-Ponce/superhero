"use client";

import { FC, ReactNode } from "react";
import Ripples from "react-ripples";

const Button: FC<{ children: ReactNode; className: string }> = ({
  children,
  className,
}) => {
  return (
    <Ripples>
      <button className={className}>{children}</button>
    </Ripples>
  );
};

export default Button;

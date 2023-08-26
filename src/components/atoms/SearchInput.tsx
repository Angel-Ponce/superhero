"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onCancel?: () => void;
}

const SearchInput: FC<InputProps> = ({
  className = "",
  onCancel,
  value,
  ...rest
}) => {
  return (
    <div className="w-full relative">
      <input
        type="text"
        className={clsx(
          "w-full rounded-[32px] bg-[rgba(255,255,255,0.10);] p-2 outline-none indent-[34px]",
          className
        )}
        placeholder="Search"
        {...rest}
        value={value}
      />
      <span className="absolute top-2 left-2">
        <Image src="/search.svg" alt="search" width={24} height={24} />
      </span>
      {value && (
        <span
          className="absolute top-2 right-2 cursor-pointer"
          onClick={onCancel}
        >
          <Image src="/cancel.svg" alt="cancel" width={24} height={24} />
        </span>
      )}
    </div>
  );
};

export default SearchInput;

import { FC, ReactNode } from "react";

const Placeholder: FC<{ icon: ReactNode; text: string }> = ({ icon, text }) => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center my-12">
      {icon}
      {text}
    </div>
  );
};

export default Placeholder;

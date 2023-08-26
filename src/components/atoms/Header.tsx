import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <Image src="/logo.svg" alt="logo" width={65} height={73} />
    </div>
  );
};

export default Header;

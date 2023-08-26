import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "$/components/atoms";
import { getHeros } from "$/utils";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Heros App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const heros = await getHeros();

  return (
    <html lang="en">
      <body
        className={clsx(
          poppins.className,
          "bg-[#11072F] min-h-screen max-h-screen p-10 w-full flex justify-center text-white"
        )}
      >
        <main className="w-full max-w-[1185px] flex flex-col gap-10">
          <Header />
          {children}
          {JSON.stringify(heros)}
        </main>
      </body>
    </html>
  );
}

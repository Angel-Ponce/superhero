import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "$/components/atoms";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Heros App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          poppins.className,
          "bg-[#11072F] min-h-screen max-h-screen p-10"
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

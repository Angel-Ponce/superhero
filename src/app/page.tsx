import { HerosLoader } from "$/components/molecules";
import { Heros } from "$/components/templates";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<HerosLoader />}>
      <Heros />
    </Suspense>
  );
}

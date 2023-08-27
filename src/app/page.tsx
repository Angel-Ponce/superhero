import { Heros } from "$/components/templates";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Heros />
    </Suspense>
  );
}

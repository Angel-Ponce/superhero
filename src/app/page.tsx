import { Heros } from "$/components/templates";
import { Suspense } from "react";
import Loading from "./loading";
import { Skeleton } from "$/components/atoms";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex gap-3">
        <Skeleton circle width={12} height={12}></Skeleton>
        <Skeleton circle width={12} height={12}></Skeleton>
        <Skeleton width={200} height={24}></Skeleton>
      </div>
      {/* <Heros /> */}
    </Suspense>
  );
}

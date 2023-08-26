"use client";

import { FC } from "react";
import ContentLoader from "react-content-loader";

const Skeleton: FC<{ width: number; height: number; circle?: boolean }> = ({
  width,
  height,
  circle = false,
}) => {
  return (
    <ContentLoader
      speed={1.5}
      backgroundColor="rgba(106, 77, 188, 0.24)"
      foregroundColor="rgba(107, 78, 188, 0.48)"
      width={circle ? width * 2 : width}
      height={circle ? width * 2 : height}
    >
      {circle ? (
        <circle cx={width} cy={width} r={width} />
      ) : (
        <rect x="0" y="0" rx="3" ry="3" width={width} height={height} />
      )}
    </ContentLoader>
  );
};

export default Skeleton;

import { FC } from "react";
import ContentLoader from "react-content-loader";

const Skeleton: FC<{
  width: number;
  height: number;
  circle?: boolean;
  radius?: number;
}> = ({ width, height, circle = false, radius = 16 }) => {
  return (
    <ContentLoader
      speed={1.5}
      backgroundColor="rgba(106, 77, 188, 0.24)"
      foregroundColor="rgba(106, 77, 188, 0.24)"
      width={circle ? width * 2 : width}
      height={circle ? width * 2 : height}
    >
      {circle ? (
        <circle cx={width} cy={width} r={width} />
      ) : (
        <rect
          x="0"
          y="0"
          rx={radius}
          ry={radius}
          width={width}
          height={height}
        />
      )}
    </ContentLoader>
  );
};

export default Skeleton;

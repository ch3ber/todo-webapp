import React from "react";
import ContentLoader from "react-content-loader";

function Skeleton(props) {
  return (
    <ContentLoader
      className="skeleton"
      speed={1}
      width={300}
      height={100}
      viewBox="0 0 300 100"
      backgroundColor="#00A8CC"
      foregroundColor="#33cccc"
      {...props}
    >
      <rect
        className="skeleton-item"
        className=""
        rx="20"
        ry="20"
        width="300"
        height="100"
      />
      <rect
        className="skeleton-item"
        className=""
        rx="20"
        ry="20"
        width="300"
        height="100"
      />
    </ContentLoader>
  );
}

export { Skeleton };

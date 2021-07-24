import React from "react";

const SkeletonVideo: React.FC = () => {
  return (
    <div
      className={`w-full mb-4 bg-gray-200 rounded-sm md:rounded-md animate-pulse h-sVideo md:h-mVideo`}></div>
  );
};

export default SkeletonVideo;

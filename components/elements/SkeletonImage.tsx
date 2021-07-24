import React from "react";

interface SkelenImageProps {
  height?: string;
  width?: string;
}

const SkeletonImage: React.FC<SkelenImageProps> = ({ height, width }) => {
  return (
    <div className={`h-24 md:h-48 w-40 md:w-full mb-4 bg-gray-200 rounded-sm md:rounded-md animate-pulse ${height} ${width}`}></div>
  );
};

export default SkeletonImage;


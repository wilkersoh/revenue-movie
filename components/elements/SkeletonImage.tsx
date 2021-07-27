import React from "react";

interface SkelenImageProps {
  height?: string;
  width?: string;
}

const SkeletonImage: React.FC<SkelenImageProps> = ({ height = "h-32", width = "w-full" }) => {
  return (
    <div className={`w-full mb-4 bg-gray-200 rounded-sm md:rounded-md animate-pulse ${height} ${width}`}></div>
  );
};

export default SkeletonImage;


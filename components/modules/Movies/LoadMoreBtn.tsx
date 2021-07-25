import React from 'react'

interface LoadMoreBtnProps {
  setPageCount: (pageCount: number) => void;
  pageCount: number;
  isVisible: boolean;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  setPageCount,
  pageCount,
  isVisible,
}) => {
  return (
    <div
      onClick={() => setPageCount(pageCount + 1)}
      className={`py-2 px-4 text-center transition-all duration-700 ease-linear absolute inset-x-0 shadow-xl left-1/2 transform -translate-x-1/2  rounded-md  ${
        isVisible
          ? "opacity-1 bottom-0 border-2 border-yellow-500"
          : "-bottom-40 opacity-0"
      }`}>
      <p>Load more</p>
    </div>
  );
};

export default LoadMoreBtn

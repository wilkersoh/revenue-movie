import React from 'react'

type MaxWidthType = "max-w-screen-xl" | "max-w-6xl";

interface ContainerProps {
  classes?: string;
  maxWidth?: MaxWidthType;
}

const Container: React.FC<ContainerProps> = ({
  classes = "",
  maxWidth = "max-w-6xl",
  children,
}) => {
  return (
    <div className={`px-2 md:px-4 mx-auto ${maxWidth} ${classes }`}>{children}</div>
  );
};

export default Container

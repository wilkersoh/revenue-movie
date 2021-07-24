import React from 'react'

type MaxWidthType = "max-w-screen";

interface ContainerProps {
  classes?: string;
  maxWidth?: MaxWidthType;
}

const Container: React.FC<ContainerProps> = ({
  classes = "",
  maxWidth = "max-w-screen",
  children,
}) => {
  return (
    <div className={`px-4 md:px-6 mx-auto ${maxWidth} ${classes}`}>
      {children}
    </div>
  );
};

export default Container

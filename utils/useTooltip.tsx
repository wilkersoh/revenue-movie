import React, { useEffect, useRef, useState } from "react";

const useTooltip = () => {
  const node = useRef();
  const [isVisible, setState] = useState(false);
  const handleClick = ({ target }) => {
    if (node.current.contains(target)) {
      // inside click
      return;
    }
    // outside click
    setState(false);
  };

  return <div></div>;
};

export default useTooltip;

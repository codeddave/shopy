import { useState } from "react";

export const useProducts = () => {
  const [focus, setFocus] = useState(false);

  const openList = () => {
    setFocus(true);
  };
  const closeList = () => {
    setFocus(false);
  };

  return {
    openList,
    closeList,
    focus,
  };
};

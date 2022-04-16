import { useState, useCallback } from "react";

export function useToggle(initialState = false): {
  toggleOn: boolean;
  onToggleClick: () => void;
} {
  const [toggleOn, setToggleOn] = useState(initialState);

  const onToggleClick = useCallback(() => {
    setToggleOn((prevToggle) => !prevToggle);
  }, []);

  return {
    toggleOn,
    onToggleClick,
  };
}

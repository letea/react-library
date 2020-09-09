// node modules
import { useState, useMemo } from "react";

// local modules - hooks
import useWindowEvents from "./useWindowEvents";

// local modules - functions
import checkIsWindowFocused from "@letea/functions/checkIsWindowFocused";

const useWindowBlur = () => {
  const defaultIsBlur = useMemo(() => !checkIsWindowFocused(), []);
  const [isBlur, setIsBlur] = useState(defaultIsBlur);

  const handleBlur = () => {
    !isBlur && setIsBlur(true);
  };

  const handleFocus = () => {
    isBlur && setIsBlur(false);
  };

  useWindowEvents({
    eventNames: ["blur", "focus"],
    callbacks: [handleBlur, handleFocus]
  });

  return isBlur;
};

export default useWindowBlur;

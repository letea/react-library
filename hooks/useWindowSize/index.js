// node modules
import { useState } from "react";

// local modules - hooks
import useWindowEvents from "../useWindowEvents";

const useWindowSize = () => {
  const getWindowSize = () => {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
  };
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const { windowWidth, windowHeight } = windowSize;
  const handleWindowEvent = () => {
    setWindowSize(getWindowSize());
  };

  useWindowEvents({
    eventNames: ["load", "resize"],
    callbacks: [handleWindowEvent]
  });

  return { windowWidth, windowHeight };
};

export default useWindowSize;

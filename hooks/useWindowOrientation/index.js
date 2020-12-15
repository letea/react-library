// node modules
import { useState } from "react";

// local modules - hooks
import useWindowEvent from "../useWindowEvent";

const useWindowOrientation = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const { width, height } = windowSize;

  useWindowEvent({
    eventName: "resize",
    callback: () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  });

  const isPortrait = width < height;
  const isLandscape = width > height;

  return { isPortrait, isLandscape };
};

export default useWindowOrientation;

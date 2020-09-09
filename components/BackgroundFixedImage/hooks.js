// node modules
import { useState, useCallback } from "react";

// local modules - functions
import checkIsMobile from "@letea/functions/checkIsMobile";
import checkIsiOS from "@letea/functions/checkIsiOS";

// local modules - hooks
import useWindowEvent from "../../hooks/useWindowEvent";

const useScreenSize = () => {
  const isMobile = checkIsMobile();
  const isiOS = checkIsiOS();
  const getWidth = () => {
    const { innerWidth, innerHeight, screen } = window;
    if (!isMobile) {
      return;
    }

    if (isiOS && innerWidth > innerHeight) {
      return screen.height;
    }

    return screen.width;
  };
  const getHeight = () => {
    const { innerWidth, innerHeight, screen } = window;
    if (!isMobile) {
      return;
    }

    if (isiOS && innerWidth > innerHeight) {
      return screen.width;
    }

    return screen.height;
  };
  const [width, setWidth] = useState(getWidth());
  const [height, setHeight] = useState(getHeight());
  const updateSize = useCallback(() => {
    setWidth(getWidth());
    setHeight(getHeight());
  }, [setWidth, setHeight, getWidth, getHeight]);

  useWindowEvent({
    eventName: "resize",
    callback: updateSize,
    startIf: isMobile
  });

  return { width, height };
};

export { useScreenSize };

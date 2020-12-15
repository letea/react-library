// node modules
import { useState, useEffect } from "react";

// local modules - hooks
import useWindowSize from "../useWindowSize";
import useWindowEvents from "../useWindowEvents";

const defaultProps = {
  target: null,
  hasPosition: false,
  isDebug: false,
  offsetTop: 0,
  offsetRight: 0,
  offsetBottom: 0,
  offsetLeft: 0
};

const useElementInView = (props = defaultProps) => {
  const {
    target,
    isDebug,
    hasPosition,
    offsetTop,
    offsetRight,
    offsetBottom,
    offsetLeft
  } = { ...defaultProps, ...props };
  const [isInView, setIsInView] = useState(false);
  const { windowWidth, windowHeight } = useWindowSize();
  const [elementRect, setElementRect] = useState(null);
  const [position, setPosition] = useState(null);
  const checkIsElementNotInView = (top, bottom, left, right, width, height) => {
    return (
      top + height * offsetTop >= windowHeight ||
      bottom - height * offsetBottom <= 0 ||
      left + width * offsetLeft >= windowWidth ||
      right - width * offsetRight <= 0
    );
  };
  const handleWindowEvent = () => {
    let element = null;
    if (target || (target && target.current)) {
      element = target.current || target;
      const {
        top,
        right,
        bottom,
        left,
        width,
        height
      } = element.getBoundingClientRect();

      if (
        !isInView &&
        !checkIsElementNotInView(top, bottom, left, right, width, height)
      ) {
        setIsInView(true);
      } else if (
        checkIsElementNotInView(top, bottom, left, right, width, height)
      ) {
        setIsInView(false);
      }

      isDebug &&
        setElementRect(
          Object.assign({ top, right, bottom, left, width, height })
        );
    }
  };

  useEffect(() => {
    if (hasPosition && elementRect) {
      if (isInView) {
        const { top, left } = elementRect;

        setPosition({
          xAxis: top > 0 ? Math.round((top / windowHeight) * 100) : 0,
          yAxis: left > 0 ? Math.round((left / windowWidth) * 100) : 0
        });
      } else if (position.xAxis !== null || position.yAxis !== null) {
        setPosition({
          xAxis: null,
          yAxis: null
        });
      }
    }
  }, [hasPosition, isInView, elementRect]);

  useWindowEvents({
    eventNames: ["load", "scroll", "resize"],
    callbacks: [handleWindowEvent]
  });

  if (isDebug) {
    return { windowWidth, windowHeight, ...elementRect, ...position, isInView };
  }

  if (hasPosition) {
    return { isInView, ...position };
  }

  return { isInView };
};

export default useElementInView;

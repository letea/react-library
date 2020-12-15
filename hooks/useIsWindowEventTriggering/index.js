// node modules
import { useState } from "react";

// local modules - hooks
import useWindowEvent from "../useWindowEvent";
import useTimeout from "../useTimeout";

const DEFAULT_DURATION = 150;
const defaultProps = {
  eventName: "",
  duration: DEFAULT_DURATION
};

const useIsWindowEventTriggering = (props = defaultProps) => {
  const { eventName, duration } = Object.assign({}, defaultProps, props);
  const [isWindowEventTriggering, setIsWindowEventTriggering] = useState(false);

  useWindowEvent({
    eventName,
    callback: () => {
      setIsWindowEventTriggering(true);
    }
  });

  useTimeout({
    callback: () => {
      setIsWindowEventTriggering(false);
    },
    duration,
    startTimeout: isWindowEventTriggering
  });

  return isWindowEventTriggering;
};

export default useIsWindowEventTriggering;

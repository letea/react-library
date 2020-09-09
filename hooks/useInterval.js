// node modules
import { useEffect } from "react";

const defaultProps = {
  callback: () => {},
  duration: 0,
  startInterval: true
};

const useInterval = (props = defaultProps) => {
  const { callback, duration, startInterval } = Object.assign(
    {},
    defaultProps,
    props
  );

  useEffect(() => {
    let intervalTimer = null;

    if (startInterval) {
      intervalTimer = setInterval(callback, duration);
    }

    return () => {
      clearInterval(intervalTimer);
    };
  }, [duration, startInterval, callback]);
};

export default useInterval;

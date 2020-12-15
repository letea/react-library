// node modules
import { useEffect, useRef } from "react";

const defaultProps = {
  callback: () => {},
  duration: 0,
  startTimeout: true
};

const useTimeout = (props = defaultProps) => {
  const { callback, duration, startTimeout } = Object.assign(
    {},
    defaultProps,
    props
  );
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    let timeoutTimer = null;

    if (startTimeout) {
      timeoutTimer = setTimeout(callbackRef.current, duration);
    }

    return () => {
      clearTimeout(timeoutTimer);
    };
  }, [duration, startTimeout]);
};

export default useTimeout;

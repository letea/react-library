// node modules
import { useState, useCallback, useEffect, useRef } from "react";

const DEFAULT_THROTTLE_TIME = 600;
const defaultProps = {
  defaultValue: "",
  throttleTime: DEFAULT_THROTTLE_TIME
};

const useThrottleState = props => {
  const { defaultValue, throttleTime } = { ...defaultProps, ...props };
  const [value, setValue] = useState(defaultValue);
  const timer = useRef();
  const lastTime = useRef();
  const currentTime = useRef();
  const setThrottleValue = useCallback(
    newValue => {
      if (typeof newValue !== "undefined") {
        currentTime.current = Date.now();
        if (
          lastTime.current &&
          currentTime.current < lastTime.current + throttleTime
        ) {
          clearTimeout(timer.current);
          timer.current = setTimeout(() => {
            lastTime.current = currentTime.current;
            setValue(newValue);
          }, throttleTime);
        } else {
          clearTimeout(timer.current);
          lastTime.current = currentTime.current;
          setValue(newValue);
        }
      }
    },
    [throttleTime, timer, currentTime, lastTime]
  );

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return [value, setThrottleValue];
};

export default useThrottleState;

// node modules
import { useState, useCallback, useEffect, useRef } from "react";

const DEFAULT_DEBOUNCE_TIME = 600;
const defaultProps = {
  defaultValue: "",
  debounceTime: DEFAULT_DEBOUNCE_TIME
};

const useDebounceState = (props) => {
  const { defaultValue, debounceTime } = { ...defaultProps, ...props };
  const [value, setValue] = useState(defaultValue);
  const debounce = useRef();
  const setDebounceValue = useCallback(
    (newValue) => {
      if (typeof newValue !== "undefined") {
        clearTimeout(debounce.current);
        debounce.current = setTimeout(() => {
          setValue(newValue);
        }, debounceTime);
      }
    },
    [debounceTime]
  );

  useEffect(() => {
    return () => {
      clearTimeout(debounce.current);
    };
  }, []);

  return [value, setDebounceValue];
};

export default useDebounceState;

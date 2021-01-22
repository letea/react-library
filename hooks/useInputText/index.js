// node modules
import { useCallback } from "react";

// local modules - hooks
import useDebounceState from "../useDebounceState";

// local modules - functions
import checkIsString from "@letea/functions/checkIsString";

const DEFAULT_DEBOUNCE_TIME = 600;
const defaultProps = {
  defaultValue: "",
  hasDebounce: false,
  debounceTime: DEFAULT_DEBOUNCE_TIME
};

const useInputText = (props) => {
  let { defaultValue, hasDebounce, debounceTime } = {
    ...defaultProps,
    ...props
  };
  const [value, setValue] = useDebounceState({
    defaultValue: checkIsString(props) ? props : defaultValue,
    debounceTime: hasDebounce ? debounceTime : 0
  });
  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [hasDebounce, debounceTime]
  );

  return [value, onChange];
};

export default useInputText;

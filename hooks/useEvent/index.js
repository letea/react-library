// node modules
import { useEffect } from "react";

const defaultProps = {
  eventName: "resize",
  callback: null,
  target: null,
  startIf: true
};

const useEvent = (props = defaultProps) => {
  const { eventName, callback, target, startIf } = Object.assign(
    {},
    defaultProps,
    props
  );
  useEffect(() => {
    let element = null;

    if (target && callback && eventName) {
      element = target.current || target;
    }

    startIf && element && element.addEventListener(eventName, callback);

    return () => {
      startIf && element && element.removeEventListener(eventName, callback);
    };
  }, [eventName, callback, target]);
};

export default useEvent;

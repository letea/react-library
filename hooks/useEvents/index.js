// node modules
import { useEffect } from "react";

const defaultProps = {
  eventNames: ["resize"],
  callbacks: [],
  targets: []
};

const useEvents = (props = defaultProps) => {
  const { eventNames, callbacks, targets } = Object.assign(
    {},
    defaultProps,
    props
  );

  if (targets.length > 1 && targets.length !== eventNames.length) {
    throw new Error(
      "useEvents: targets' length should be 1 or equal to eventNames."
    );
  }

  if (callbacks.length > 1 && callbacks.length !== eventNames.length) {
    throw new Error(
      "useEvents: callbacks' length should be 1 or equal to eventNames."
    );
  }

  useEffect(() => {
    const getTarget = (index) => {
      const target = targets.length > 1 ? targets[index] : targets[0];
      return target.current || target;
    };
    const getCallback = (index) => {
      return callbacks.length > 1 ? callbacks[index] : callbacks[0];
    };
    eventNames.forEach((eventName, index) => {
      const element = getTarget(index);
      element && element.addEventListener(eventName, getCallback(index));
    });

    return () => {
      eventNames.forEach((eventName, index) => {
        const element = getTarget(index);
        element && element.removeEventListener(eventName, getCallback(index));
      });
    };
  }, [eventNames, callbacks, targets]);
};

export default useEvents;

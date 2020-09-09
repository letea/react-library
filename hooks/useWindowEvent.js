// local modules - hooks
import useEvent from "./useEvent";

const defaultProps = {
  eventName: "resize",
  callback: null,
  startIf: true
};

const useWindowEvent = (props = defaultProps) => {
  const { eventName, callback, startIf } = Object.assign(
    {},
    defaultProps,
    props
  );

  useEvent({
    callback,
    eventName,
    startIf,
    target: window
  });
};

export default useWindowEvent;

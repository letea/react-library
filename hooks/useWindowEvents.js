// local modules - hooks
import useEvents from "./useEvents";

const defaultProps = {
  eventNames: ["resize"],
  callbacks: []
};

const useWindowEvents = (props = defaultProps) => {
  const { eventNames, callbacks } = Object.assign({}, defaultProps, props);

  useEvents({
    eventNames,
    callbacks,
    targets: [window]
  });
};

export default useWindowEvents;

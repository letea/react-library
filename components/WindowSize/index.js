// node modules
import React from "react";
import PropTypes from "prop-types";

// local modules - hooks
import useWindowSize from "../../hooks/useWindowSize";
import useIsWindowEventTriggering from "../../hooks/useIsWindowEventTriggering";

// local files
import { Wrapper } from "./style";

const WindowSize = ({
  autoHide = false,
  hideDelay = 1000,
  isFixed = true,
  zIndex = 9999
}) => {
  const { windowWidth, windowHeight } = useWindowSize();
  const isResizing = useIsWindowEventTriggering({
    eventName: "resize",
    duration: hideDelay
  });
  const shouldHide = autoHide && !isResizing;

  return (
    <Wrapper
      isFixed={isFixed}
      zIndex={zIndex}
      hide={shouldHide}
    >{`${windowWidth}px x ${windowHeight}px`}</Wrapper>
  );
};

WindowSize.propTypes = {
  autoHide: PropTypes.bool,
  hideDelay: PropTypes.number,
  isFixed: PropTypes.bool,
  zIndex: PropTypes.number
};

export default WindowSize;

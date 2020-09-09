// node modules
import React from "react";
import PropTypes from "prop-types";

// local files
import { Wrapper } from "./style";

const LayoutTransition = ({
  start = false,
  url = "",
  duration = 1000,
  frames = 0,
  reverse = false,
  infinite = false,
  forwards = false,
  onFinish = null,
  zIndex = 9999,
  isFixed = true
}) => {
  return (
    <Wrapper
      startAnimation={start}
      url={url}
      duration={duration}
      frames={frames}
      reverse={reverse}
      infinite={infinite}
      forwards={forwards}
      zIndex={zIndex}
      isFixed={isFixed}
      onAnimationEnd={() => {
        onFinish && onFinish();
      }}
    />
  );
};

LayoutTransition.propTypes = {
  start: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  duration: PropTypes.number,
  frames: PropTypes.number,
  reverse: PropTypes.bool,
  infinite: PropTypes.bool,
  forwards: PropTypes.bool,
  onFinish: PropTypes.func,
  zIndex: PropTypes.number,
  isFixed: PropTypes.bool
};

export default LayoutTransition;

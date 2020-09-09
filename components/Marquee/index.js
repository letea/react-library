// node modules
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

// local modules - hooks
import useWindowEvent from "../../hooks/useWindowEvent";
import useIsWindowEventTriggering from "../../hooks/useIsWindowEventTriggering";

// local files
import { Wrapper, Content } from "./style";
import { DURATION_ANIMATION_PAUSE } from "./config";

const Marquee = ({
  animationDuration = 40000,
  isPausedOnHover = false,
  children
}) => {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    setContentHeight(contentRef.current.offsetHeight);
  }, []);

  useWindowEvent({
    eventName: "resize",
    callback: () => {
      const { offsetHeight } = contentRef.current;
      if (offsetHeight !== contentHeight) {
        setContentHeight(offsetHeight);
      }
    }
  });

  const isResizing = useIsWindowEventTriggering({
    eventName: "resize",
    duration: DURATION_ANIMATION_PAUSE
  });

  return (
    <Wrapper height={contentHeight}>
      <Content
        ref={contentRef}
        isPaused={isResizing}
        isPausedOnHover={isPausedOnHover}
        animationDuration={animationDuration}
      >
        {children}
        {children}
      </Content>
    </Wrapper>
  );
};

Marquee.propTypes = {
  animationDuration: PropTypes.number,
  isPausedOnHover: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Marquee;

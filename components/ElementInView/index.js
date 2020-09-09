// node modules
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

// local modules
import useElementInView from "../../hooks/useElementInView";

// local files
import { Wrapper } from "./style";

const ElementInView = ({
  isDebug = false,
  hasPosition = false,
  offsetTop = 0,
  offsetRight = 0,
  offsetBottom = 0,
  offsetLeft = 0,
  onReady = () => {},
  onMove = () => {},
  onEnter = () => {},
  onLeave = () => {},
  children
}) => {
  const wrapperRef = useRef();
  const element = useElementInView({
    target: wrapperRef,
    offsetTop,
    offsetRight,
    offsetBottom,
    offsetLeft,
    isDebug,
    hasPosition
  });
  const { isInView, top, left, xAxis } = element;

  useEffect(() => {
    onReady && onReady({ ...element, target: wrapperRef.current });
  }, []);

  useEffect(() => {
    xAxis && onReady && onReady({ ...element, target: wrapperRef.current });
  }, [xAxis]);

  useEffect(() => {
    onReady && onReady({ ...element, target: wrapperRef.current });
  }, []);

  useEffect(() => {
    isInView && onEnter && onEnter({ ...element, target: wrapperRef.current });
    !isInView && onLeave && onLeave({ ...element, target: wrapperRef.current });
  }, [isInView]);

  useEffect(() => {
    onMove && onMove({ ...element, target: wrapperRef.current });
  }, [top, left]);

  return (
    <Wrapper ref={wrapperRef}>
      {React.cloneElement(children, { isInView: isInView })}
    </Wrapper>
  );
};

ElementInView.propTypes = {
  isDebug: PropTypes.bool,
  hasPosition: PropTypes.bool,
  offsetTop: PropTypes.number,
  offsetRight: PropTypes.number,
  offsetBottom: PropTypes.number,
  offsetLeft: PropTypes.number,
  onReady: PropTypes.func,
  onMove: PropTypes.func,
  onEnter: PropTypes.func,
  onLeave: PropTypes.func,
  children: PropTypes.node
};

export default ElementInView;

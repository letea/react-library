// node modules
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

// local modules - hooks
import useWindowSize from "../../hooks/useWindowSize";

// local modules - functions
import checkIsInAppBrowserByFacebookNotLoaded from "@letea/functions/checkIsInAppBrowserByFacebookNotLoaded";

// local files
import { Wrapper, Content } from "./style";

const FullPage = ({
  children = null,
  isDebug = false,
  enableMinWidth = 0,
  offsetHeight = 0,
  paddingTop = 0,
  paddingBottom = 0
}) => {
  const { windowWidth, windowHeight } = useWindowSize();
  const [minHeight, setMinHeight] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [isNeedPadding, setIsNeedPadding] = useState(false);
  const contentRef = useRef();

  // Check enableMinWidth
  useEffect(() => {
    if (isActive && enableMinWidth > windowWidth) {
      setIsActive(false);
    } else if (!isActive && enableMinWidth <= windowWidth) {
      setIsActive(true);
    }
  }, [isActive, windowWidth, enableMinWidth]);

  // Check is Padding Needed
  // Update Minimal Height
  useEffect(() => {
    if (isActive && contentRef.current) {
      const newMinHeight = contentRef.current.offsetHeight;
      const isNewSizeNeedPadding =
        newMinHeight + paddingTop + paddingBottom > windowHeight;
      if (!isNeedPadding && isNewSizeNeedPadding) {
        setIsNeedPadding(true);
      } else if (isNeedPadding && !isNewSizeNeedPadding) {
        setIsNeedPadding(false);
      } else if (isNeedPadding && newMinHeight !== minHeight) {
        setMinHeight(newMinHeight);
      }
    }
  });

  const getStyle = () => {
    return isActive
      ? {
          height: `${
            (isNeedPadding ? minHeight : windowHeight) - offsetHeight
          }px`,
          paddingTop: `${isNeedPadding ? paddingTop : 0}px`,
          paddingBottom: `${isNeedPadding ? paddingBottom : 0}px`
        }
      : {};
  };

  // Facebook InAppBrowser Size Bug. Need to wait until screen width is equal window width. 2020/02/13
  if (checkIsInAppBrowserByFacebookNotLoaded()) {
    return <></>;
  }

  return (
    <Wrapper active={isActive} debug={isDebug} style={getStyle()}>
      <Content active={isActive} debug={isDebug} ref={contentRef}>
        {children}
      </Content>
    </Wrapper>
  );
};

FullPage.propTypes = {
  children: PropTypes.node.isRequired,
  isDebug: PropTypes.bool,
  enableMinWidth: PropTypes.number,
  offsetHeight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number
};

export default FullPage;

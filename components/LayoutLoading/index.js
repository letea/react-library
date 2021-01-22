// node modules
import React, { useState, useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";

// local modules - components
import ImageLoader from "../ImageLoader";

// local modules - hooks
import useWindowEvent from "../../hooks/useWindowEvent";

// local assets
import videoSrc from "./video.mp4";

// local files
import { Wrapper, Container, Progress, Tips, Resource } from "./style";

const LayoutLoading = ({
  images = [],
  getUserPermission = false,
  onLoad = () => {
    console.log("LayoutLoading: loaded.");
  },
  zIndex = 9999,
  isFixed = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const isShowClickTip = progress === 100 && getUserPermission;
  const videoRef = useRef();
  const onEachLoad = useCallback((loadedImages) => {
    const currentProgress = (loadedImages.length / images.length) * 100;
    setProgress(Math.floor(currentProgress));
    currentProgress === 100 && !getUserPermission && setIsLoaded(true);
  }, []);
  const onUserInteract = useCallback(() => {
    if (progress === 100 && getUserPermission) {
      setIsLoaded(true);
      videoRef && videoRef.current.play();
    }
  });

  useEffect(() => {
    if (isLoaded) {
      onLoad && onLoad();
    }
  }, [isLoaded]);

  useWindowEvent({
    eventName: "keydown",
    callback: () => {
      onUserInteract();
    }
  });

  return (
    <Wrapper onClick={onUserInteract} isFixed={isFixed} zIndex={zIndex}>
      <Container>
        <Progress>{`${progress}%`}</Progress>
        {isShowClickTip && <Tips>Press any key or click to continue...</Tips>}
      </Container>
      <Resource>
        {getUserPermission && (
          <video src={videoSrc} preload="true" ref={videoRef} muted />
        )}
        <ImageLoader onEachLoad={onEachLoad} images={images} />
      </Resource>
    </Wrapper>
  );
};

LayoutLoading.propTypes = {
  images: PropTypes.array.isRequired,
  getUserPermission: PropTypes.bool,
  onLoad: PropTypes.func,
  zIndex: PropTypes.number,
  isFixed: PropTypes.bool
};

export default LayoutLoading;

// node modules
import React, { useState, useEffect, useCallback } from "react";
import { unstable_batchedUpdates } from "react-dom";
import PropTypes from "prop-types";

// local modules - components
import ImageLoader from "../ImageLoader";

// local modules - functions
import getNextIndexInArray from "@letea/functions/getNextIndexInArray";

// local modules - hooks
import useTimeout from "../../hooks/useTimeout";

// local files
import { Wrapper, Image } from "./style";

const Gallery = ({
  backgroundColor = null,
  backgroundSize = null,
  duration = 3000,
  images = [],
  position = null,
  transition = 1000,
  zIndex = null
}) => {
  const [isStart, setIsStart] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(images.length > 1 ? 1 : 0);
  const onTransitionEnd = useCallback(() => {
    unstable_batchedUpdates(() => {
      setIndex(
        getNextIndexInArray({
          array: images,
          index: index,
          isLoop: true
        })
      );
      setIsChanging(false);
      setNextIndex(
        getNextIndexInArray({
          array: images,
          index: nextIndex,
          isLoop: true
        })
      );
    });
  }, [images, index, nextIndex]);

  // Prepare to change image.
  useTimeout({
    callback: () => {
      setIsChanging(true);
    },
    duration,
    startTimeout: isStart && !isChanging
  });

  // Handle Change if transition is 0. (can't trigger onTransitionEnd event.)
  useEffect(() => {
    if (isChanging && transition === 0) {
      onTransitionEnd();
    }
  }, [isChanging, transition, onTransitionEnd]);

  return (
    <Wrapper position={position} zIndex={zIndex}>
      <Image
        backgroundColor={backgroundColor}
        backgroundSize={backgroundSize}
        image={images[nextIndex]}
      />
      <Image
        backgroundColor={backgroundColor}
        backgroundSize={backgroundSize}
        fade={isChanging}
        image={images[index]}
        onTransitionEnd={onTransitionEnd}
        transition={transition}
      />
      {!isImagesLoaded && (
        <ImageLoader
          images={images}
          onAllLoad={() => {
            setIsImagesLoaded(true);
          }}
          onEachLoad={(loadImages) => {
            if (!isStart && loadImages.length >= 2) {
              setIsStart(true);
            }
          }}
        />
      )}
    </Wrapper>
  );
};

Gallery.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundSize: PropTypes.string,
  duration: PropTypes.number,
  images: PropTypes.array.isRequired,
  position: PropTypes.string,
  transition: PropTypes.number,
  zIndex: PropTypes.number
};

export default Gallery;

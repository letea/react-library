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

const Gallery = ({ images = [], duration = 3000, transition = 1000 }) => {
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
  }, [isChanging, transition]);

  return (
    <Wrapper>
      <Image image={images[nextIndex]} />
      <Image
        image={images[index]}
        fade={isChanging}
        transition={transition}
        onTransitionEnd={onTransitionEnd}
      />
      {!isImagesLoaded && (
        <ImageLoader
          images={images}
          onEachLoad={loadImages => {
            if (!isStart && loadImages.length >= 2) {
              setIsStart(true);
            }
          }}
          onAllLoad={() => {
            setIsImagesLoaded(true);
          }}
        />
      )}
    </Wrapper>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  duration: PropTypes.number,
  transition: PropTypes.number
};

export default Gallery;

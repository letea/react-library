// node modules
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// local files
import { Wrapper } from "./style";

const ImageLoader = React.memo(
  ({ images = [], onEachLoad = () => {}, onAllLoad = () => {} }) => {
    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
      if (loadedImages.length <= images.length) {
        onEachLoad && onEachLoad(loadedImages);
      }

      if (loadedImages.length === images.length) {
        onAllLoad && onAllLoad(loadedImages);
      }
    }, [loadedImages]);

    return (
      <Wrapper>
        {images.map((item, index) => {
          return (
            <img
              src={item}
              alt=""
              key={`${item}-${index}`}
              onLoad={() => {
                setLoadedImages([...loadedImages, item]);
              }}
              onError={() => {
                setLoadedImages([...loadedImages, item]);
              }}
            />
          );
        })}
      </Wrapper>
    );
  }
);

ImageLoader.displayName = "ImageLoader";

ImageLoader.propTypes = {
  images: PropTypes.array.isRequired,
  onEachLoad: PropTypes.func,
  onAllLoad: PropTypes.func
};

export default ImageLoader;

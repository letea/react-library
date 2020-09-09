// node modules
import React from "react";
import PropTypes from "prop-types";

// local modules - components
import Gallery from "../Gallery";

// local modules - hooks
import useWindowOrientation from "../../hooks/useWindowOrientation";

// local files
import { Wrapper } from "./style";

const BackgroundGalleryWithOrientation = ({
  portraitImages = [],
  landscapeImages = [],
  duration = 3000,
  transition = 1000
}) => {
  const { isPortrait } = useWindowOrientation();
  const images = isPortrait ? portraitImages : landscapeImages;

  return (
    <Wrapper>
      <Gallery images={images} duration={duration} transition={transition} />
    </Wrapper>
  );
};

BackgroundGalleryWithOrientation.propTypes = {
  portraitImages: PropTypes.array.isRequired,
  landscapeImages: PropTypes.array.isRequired,
  duration: PropTypes.number,
  transition: PropTypes.number
};

export default BackgroundGalleryWithOrientation;

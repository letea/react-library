// node modules
import React from "react";
import PropTypes from "prop-types";

// local modules
import Gallery from "../Gallery";

// local files
import { Wrapper } from "./style";

const BackgroundGallery = ({
  images = [],
  duration = 3000,
  transition = 1000
}) => {
  return (
    <Wrapper>
      <Gallery images={images} duration={duration} transition={transition} />
    </Wrapper>
  );
};

BackgroundGallery.propTypes = {
  images: PropTypes.array.isRequired,
  duration: PropTypes.number,
  transition: PropTypes.number
};

export default BackgroundGallery;

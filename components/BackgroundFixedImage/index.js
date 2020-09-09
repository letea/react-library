// node modules
import React from "react";
import PropTypes from "prop-types";

// local files
import { useScreenSize } from "./hooks";
import { Wrapper } from "./style";

const BackgroundFixedImage = ({ image = "" }) => {
  const { width, height } = useScreenSize();

  return <Wrapper image={image} style={{ width, height }} />;
};

BackgroundFixedImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default BackgroundFixedImage;

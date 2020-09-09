// node modules
import React from "react";
import PropTypes from "prop-types";

// local files
import { Wrapper } from "./style";

const Frame = ({ isFixed = false, zIndex = -1 }) => {
  return <Wrapper isFixed={isFixed} zIndex={zIndex}></Wrapper>;
};

Frame.propTypes = {
  isFixed: PropTypes.bool,
  zIndex: PropTypes.number
};

export default Frame;

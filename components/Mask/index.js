// node modules
import React from "react";
import PropTypes from "prop-types";

// local files
import { Wrapper } from "./style";

const Mask = ({ isFixed = false, zIndex = 9999 }) => {
  return <Wrapper isFixed={isFixed} zIndex={zIndex} />;
};

Mask.propTypes = {
  isFixed: PropTypes.bool,
  zIndex: PropTypes.number
};

export default Mask;

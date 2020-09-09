// node modules
import React from "react";
import PropTypes from "prop-types";

// local files
import { useFPS } from "./hooks";
import { Wrapper } from "./style";

const FPS = ({ isFixed = false, zIndex = 9999 }) => {
  const { ref } = useFPS();

  return <Wrapper ref={ref} isFixed={isFixed} zIndex={zIndex} />;
};

FPS.propTypes = {
  isFixed: PropTypes.bool,
  zIndex: PropTypes.number
};

export default FPS;

// node modules
import React from "react";
import PropTypes from "prop-types";

// local files
import { Wrapper } from "./style";

const HorizontalScroll = ({ hideScrollbar = true, children }) => {
  return <Wrapper hideScrollbar={hideScrollbar}>{children}</Wrapper>;
};

HorizontalScroll.propTypes = {
  hideScrollbar: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default HorizontalScroll;

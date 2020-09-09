// node modules
import React from "react";
import PropTypes from "prop-types";

// local files
import { Wrapper, Message } from "./style";

const LandscapeTip = ({ message = "", zIndex = 9999 }) => {
  return (
    <Wrapper zIndex={zIndex}>
      <Message className="_title">{message}</Message>
    </Wrapper>
  );
};

LandscapeTip.propTypes = {
  message: PropTypes.string.isRequired,
  zIndex: PropTypes.number
};

export default LandscapeTip;

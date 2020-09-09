// node modules
import React from "react";
import PropTypes from "prop-types";

// local files
import { Wrapper } from "./style";

const QRCode = ({ text = "", width = 150, height = 150 }) => {
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=${width}x${height}&data=${encodeURIComponent(
    text
  )}`;

  return <Wrapper src={url} />;
};

QRCode.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

export default QRCode;

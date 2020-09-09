// node modules
import React from "react";
import PropTypes from "prop-types";

// local files
import { useClipboardJS } from "./hooks";
import { Wrapper } from "./style";

const Clipboard = ({
  text = "",
  isDebugMode = false,
  onSuccess = () => {},
  onFail = () => {},
  children
}) => {
  const { ref } = useClipboardJS({
    isDebugMode,
    onSuccess,
    onFail
  });

  return (
    <Wrapper ref={ref} data-clipboard-text={text}>
      {children}
    </Wrapper>
  );
};

Clipboard.propTypes = {
  text: PropTypes.string.isRequired,
  isDebugMode: PropTypes.bool,
  onSuccess: PropTypes.func,
  onFail: PropTypes.func,
  children: PropTypes.node
};

export default Clipboard;

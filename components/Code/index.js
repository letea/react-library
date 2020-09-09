// node modules
import React from "react";
import PropTypes from "prop-types";

// local files
import { useHighlightJS } from "./hooks";
import { Wrapper } from "./style";

const Code = React.memo(
  ({ code = "" }) => {
    const { ref, isInit, codeBeautified } = useHighlightJS({ code });

    return (
      <Wrapper isInit={isInit}>
        <pre>
          <code className="javascript" ref={ref}>
            {codeBeautified}
          </code>
        </pre>
      </Wrapper>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.code === nextProps.code;
  }
);

Code.propTypes = {
  code: PropTypes.string.isRequired
};

export default Code;

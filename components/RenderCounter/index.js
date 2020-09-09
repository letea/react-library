// node modules
import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";

// local modules - functions
import getRandomString from "@letea/functions/getRandomString";

// local files
import { Wrapper, Counter } from "./style";

const RenderCounter = ({ children }) => {
  /* eslint-disable-next-line */
  const [update, setUpdate] = useState("");
  const count = useRef(0);
  const handleClick = useCallback(() => {
    count.current = -1;
    setUpdate(getRandomString(6));
  }, []);

  count.current += 1;

  return (
    <Wrapper>
      {children}
      <Counter
        onClick={handleClick}
        title="reset count"
      >{`Render: ${count.current}`}</Counter>
    </Wrapper>
  );
};

RenderCounter.propTypes = {
  children: PropTypes.node
};

export default RenderCounter;

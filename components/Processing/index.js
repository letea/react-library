// node modules
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import P5 from "p5";

// local file
import { Wrapper } from "./style";

const Processing = ({
  sketch = null,
  isPositionFixed = false,
  zIndex = null
}) => {
  const ref = useRef();

  useEffect(() => {
    let p5;

    if (sketch) {
      p5 = new P5(sketch, ref.current);
    }

    return () => {
      p5.remove();
      p5.destroy && p5.destroy();
    };
  }, []);

  return (
    <Wrapper ref={ref} isPositionFixed={isPositionFixed} zIndex={zIndex} />
  );
};

Processing.propTypes = {
  sketch: PropTypes.func,
  isPositionFixed: PropTypes.bool,
  zIndex: PropTypes.number
};

export default Processing;

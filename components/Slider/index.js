// node modules
import React, { useState } from "react";
import PropTypes from "prop-types";

// local files
import { Wrapper, Progress, Input, Number } from "./style";

const Slider = ({
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange = () => {}
}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <>
      <Wrapper>
        <Progress style={{ width: `calc(${(value / max) * 100}% + 0%)` }} />
        <Input
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
          onChange={e => {
            setValue(e.target.value);
            onChange && onChange(e.target.value);
          }}
        />
      </Wrapper>
      <Number>{`${value}/${max}`}</Number>
    </>
  );
};

Slider.propTypes = {
  defaultValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func
};

export default Slider;

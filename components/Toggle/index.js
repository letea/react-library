// node modules
import React, { useState } from "react";
import PropTypes from "prop-types";

// local files
import { Wrapper, Button } from "./style";

const Toggle = ({
  defaultValue = false,
  onChange = () => {},
  width = 64,
  height = 32
}) => {
  const [isActive, setIsActive] = useState(defaultValue);

  return (
    <Wrapper
      isActive={isActive}
      onClick={() => {
        setIsActive((prevValue) => !prevValue);
        onChange && onChange(!isActive);
      }}
      style={{
        width,
        height
      }}
    >
      <Button isActive={isActive} />
    </Wrapper>
  );
};

Toggle.propTypes = {
  defaultValue: PropTypes.bool,
  onChange: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Toggle;

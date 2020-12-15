// node modules
import { useState } from "react";

// local modules - functions
import checkIsNumber from "@letea/functions/checkIsNumber";

const useInputNumber = initialValue => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    const { value } = e.target;
    const parseFloatValue = Number.parseFloat(value);

    if (checkIsNumber(parseFloatValue)) {
      setValue(parseFloatValue);
    } else {
      setValue(0);
    }
  };

  return [value, onChange];
};

export default useInputNumber;

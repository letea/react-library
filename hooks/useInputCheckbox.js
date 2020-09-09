// node modules
import { useState } from "react";

const useInputCheckbox = initialValue => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    if (e && e.target) {
      setValue(e.target.checked);
    } else {
      setValue(e);
    }
  };

  return [value, onChange];
};

export default useInputCheckbox;

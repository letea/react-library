// node modules
import { useState } from "react";

const useSelect = (initialIndex) => {
  const [index, setIndex] = useState(initialIndex);

  const onChange = (e) => {
    setIndex(e.target.selectedIndex);
  };

  return [index, onChange];
};

export default useSelect;

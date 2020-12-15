// node modules
import { useState, useEffect } from "react";

const useDocumentTitle = initialValue => {
  const [value, setValue] = useState(initialValue || document.title);

  useEffect(() => {
    if (value === "") {
      document.title = window.location.href;
      setValue(window.location.href);
    } else if (document.title !== value) {
      document.title = value;
    }
  }, [value]);

  return [value, setValue];
};

export default useDocumentTitle;

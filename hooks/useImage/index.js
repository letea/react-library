// node modules
import { useState, useEffect } from "react";

const defaultProps = {
  url: "",
  crossOrigin: false
};

const defaultState = {
  status: "loading"
};

const useImage = (props = defaultProps) => {
  const { url, crossOrigin } = Object.assign({}, defaultProps, props);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!url) {
      return;
    }

    const img = document.createElement("img");

    const onLoad = () => {
      setStatus("loaded");
    };

    const onError = () => {
      setStatus("failed");
    };

    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);

    if (crossOrigin) {
      img.crossOrigin = crossOrigin;
    }

    img.src = url;

    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
      setStatus(defaultState);
    };
  }, [url, crossOrigin, setStatus]);

  return [url, status];
};

export default useImage;

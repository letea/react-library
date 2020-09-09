// node modules
import { useEffect, useRef } from "react";
import ClipboardJS from "clipboard";

const useClipboardJS = ({
  isDebugMode = false,
  onSuccess = () => {},
  onFail = () => {}
}) => {
  const ref = useRef();

  useEffect(() => {
    const clipboard = new ClipboardJS(ref.current);

    clipboard.on("success", function (e) {
      if (isDebugMode) {
        console.info("Action:", e.action);
        console.info("Text:", e.text);
        console.info("Trigger:", e.trigger);
      }
      onSuccess && onSuccess();
    });

    clipboard.on("error", function (e) {
      if (isDebugMode) {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);
      }
      onFail && onFail();
    });

    return () => {
      clipboard.destroy();
    };
  }, [isDebugMode, onSuccess, onFail]);

  return { ref };
};

export { useClipboardJS };

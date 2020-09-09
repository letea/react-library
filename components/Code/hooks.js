// node modules
import { useState, useEffect, useRef } from "react";
import highlight from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import "highlight.js/styles/atom-one-dark.css";

highlight.registerLanguage("javascript", javascript);

const useHighlightJS = ({ code = "" }) => {
  const [isInit, setIsInit] = useState(false);
  const ref = useRef();
  const codeBeautified = prettier.format(code, {
    parser: "babel",
    plugins: [parserBabel]
  });

  useEffect(() => {
    highlight.highlightBlock(ref.current);
    setIsInit(true);
  }, [code]);

  return { ref, isInit, codeBeautified };
};

export { useHighlightJS };

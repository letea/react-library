// node modules
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

// local modules - functions
import checkIsString from "@letea/functions/checkIsString";

// local files
import { DEFAULT_ID } from "./config";
import Toast from "./index";

const getRootElement = () => {
  let rootElement = document.getElementById(DEFAULT_ID);
  if (!rootElement) {
    rootElement = document.createElement("div");
    rootElement.id = DEFAULT_ID;
    document.body.appendChild(rootElement);
  }

  return rootElement;
};

const destroy = () => {
  const rootElement = getRootElement();

  unmountComponentAtNode(rootElement);
};

const defaultProps = {
  message: "",
  url: "",
  duration: 3000,
  hasClose: false
};

const toast = props => {
  const { message, url, duration, hasClose } = { ...defaultProps, ...props };
  const rootElement = getRootElement();

  if (rootElement.children) {
    destroy();
  }

  render(
    <Toast
      message={checkIsString(props) ? props : message}
      url={url}
      duration={duration}
      hasClose={hasClose}
      onFinish={destroy}
    />,
    rootElement
  );
};

export { toast };

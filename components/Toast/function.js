// node modules
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

// local modules - functions
import checkIsString from "@letea/functions/checkIsString";
import getRandomString from "@letea/functions/getRandomString";

// local files
import { DEFAULT_ID } from "./config";
import Toast from "./index";

const getRootElement = (elementId = "") => {
  let rootElement = document.getElementById(elementId);
  if (!rootElement) {
    rootElement = document.createElement("div");
    rootElement.id = elementId;
    document.body.appendChild(rootElement);
  }

  return rootElement;
};

const destroyComponent = rootElement => {
  rootElement && unmountComponentAtNode(rootElement);
};

const destroyRootElement = rootElement => {
  rootElement && rootElement.remove();
};

const defaultProps = {
  message: "",
  url: "",
  duration: 3000,
  hasClose: false
};

const toast = props => {
  const { message, url, duration, hasClose } = { ...defaultProps, ...props };
  const rootElement = getRootElement(`${DEFAULT_ID}-${getRandomString(5)}`);

  if (rootElement.children) {
    destroyComponent(rootElement);
  }

  render(
    <Toast
      message={checkIsString(props) ? props : message}
      url={url}
      duration={duration}
      hasClose={hasClose}
      onFinish={() => {
        destroyComponent(rootElement);
        destroyRootElement(rootElement);
      }}
    />,
    rootElement
  );
};

export { toast };

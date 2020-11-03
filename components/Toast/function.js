// node modules
import React from "react";
import checkIsString from "@letea/functions/checkIsString";
import getRandomString from "@letea/functions/getRandomString";

// local modules - functions
import createReactDOMElement from "../../functions/createReactDOMElement";
import removeReactDOMElement from "../../functions/removeReactDOMElement";

// local files
import { DEFAULT_ID } from "./config";
import Toast from "./index";

const defaultProps = {
  message: "",
  url: "",
  duration: 3000,
  hasClose: false
};

const elementId = `${DEFAULT_ID}-${getRandomString(5)}`;

const toast = props => {
  const { message, url, duration, hasClose } = { ...defaultProps, ...props };

  // Remove Exist Component
  removeReactDOMElement(elementId);

  // Append React Component to Document
  createReactDOMElement({
    Component: (
      <Toast
        message={checkIsString(props) ? props : message}
        url={url}
        duration={duration}
        hasClose={hasClose}
        onFinish={() => {
          removeReactDOMElement(elementId);
        }}
      />
    ),
    elementId
  });
};

export { toast };

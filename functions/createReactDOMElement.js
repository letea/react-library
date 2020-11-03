// node modules
import ReactDOM from "react-dom";

// local modules
import createRootElement from "./createRootElement";

function createReactDOMElement({ Component, elementId = "" }) {
  ReactDOM.render(Component, createRootElement(elementId));
}

export default createReactDOMElement;

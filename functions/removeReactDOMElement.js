// node modules
import ReactDOM from "react-dom";

// local module
import removeRootElement from "./removeRootElement";

const removeReactDOMElement = (id = "") => {
  const element = document.getElementById(id);
  element && ReactDOM.unmountComponentAtNode(element);
  removeRootElement(id);
};

export default removeReactDOMElement;

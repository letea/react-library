const createRootElement = (id = "") => {
  let element = document.getElementById(id);
  if (!element) {
    element = document.createElement("div");
    element.id = id;
    document.body.appendChild(element);
  }
  return element;
};

export default createRootElement;

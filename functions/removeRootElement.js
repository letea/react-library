export const removeRootElement = (id = "") => {
  const element = document.getElementById(id);
  element && element.remove();
};

export default removeRootElement;

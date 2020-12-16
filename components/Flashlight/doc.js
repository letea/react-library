module.exports = {
  title: "Flashlight",
  description:
    "A flashlight effect by canvas. You can control the flashlight by mouse/touch move.",
  defaultProps: `
    defaultProps = {
      defaultMouseX: window.innerWidth / 2, // optional
      defaultMouseY: window.innerHeight / 2 // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <Flashlight />
      );
    }
  `,
  notes: ["Watch out!"],
  demo: {
    title: "Flashlight",
    url:
      "https://storybook.letea.me/?path=/story/playground-components-canvas--flashlight"
  },
  kind: "Canvas",
  type: "Component"
};

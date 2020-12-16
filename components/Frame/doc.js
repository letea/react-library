module.exports = {
  title: "Frame",
  description:
    "Display frame for developing layout, style is base on Storybook.",
  defaultProps: `
    defaultProps = {
      isFixed: false, // optional, default position is absolute.
      zIndex: -1 // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <Frame />
      );
    }
  `,
  references: [{ title: "Storybook", url: "https://storybook.js.org/" }],
  demo: {
    title: "Frame",
    url: "https://storybook.letea.me/?path=/story/components-tool-4--frame"
  },
  kind: "Tool",
  type: "Component"
};

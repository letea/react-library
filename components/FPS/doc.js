module.exports = {
  title: "FPS",
  description: "Display FPS(Frame per Second).",
  defaultProps: `
    defaultProps = {
      isFixed: false, // optional, default position is absolute.
      zIndex: 9999 // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <FPS />
      );
    }
  `,
  demo: {
    title: "FPS",
    url: "https://storybook.letea.me/?path=/story/components-tool-4--fps"
  },
  kind: "Tool",
  type: "Component"
};

module.exports = {
  title: "WindowSize",
  description:
    "Display the size of the window, base on Chrome's inspect style.",
  defaultProps: `
    defaultProps = {
      isFixed: true, // optional
      zIndex: 9999, // optional
      autoHide: false, // optional
      hideDelay: 1000 // optional, it will enable if audHide is true.
    }
  `,
  usage: `
    function Example() {
      return (
        <WindowSize />
      );
    }
  `,
  demo: {
    title: "WindowSize",
    url: "https://storybook.letea.me/?path=/story/components-tool-4--windowsize"
  },
  kind: "Tool",
  type: "Component"
};

module.exports = {
  title: "LandscapeTip",
  description:
    "Sometimes you want to hint users something. For example, browsing on the mobile web in the landscape is suck.",
  defaultProps: `
    defaultProps = {
      message: "", // optional
      zIndex: 9999 // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <LandscapeTip message="Hello World!" />
      );
    }
  `,
  demo: {
    title: "LandscapeTip",
    url:
      "https://storybook.letea.me/?path=/story/playground-components-layout--landscapetip"
  },
  kind: "Layout",
  type: "Component"
};

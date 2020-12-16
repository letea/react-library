module.exports = {
  title: "FullPage",
  description:
    "Create a full-page layout and keeps the height of content is equal to or greater than the height of the window.",
  defaultProps: `
    defaultProps = {
      isDebug: false, // optional, it will display contrastive colors if the value is true.
      enableMinWidth: 0, // optional
      offsetHeight: 0, // optional, to adjust the size of height.
      paddingTop: 0, // optional, add padding top to content.
      paddingBottom: 0 // optional, add padding bottom to content.
    }
  `,
  usage: `
    function Example() {
      return (
        <FullPage>
          <YourComponent />
        </FullPage>
      );
    }
  `,
  demo: {
    title: "FullPage",
    url:
      "https://storybook.letea.me/?path=/story/playground-components-layout--fullpage"
  },
  kind: "Layout",
  type: "Component"
};

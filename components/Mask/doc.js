module.exports = {
  title: "Mask",
  description: "A mask covers the layout.",
  defaultProps: `
    defaultProps = {
      isFixed: false, // optional
      zIndex: 9999 // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <>
          <YourComponent />
          <Mask />
        </>
      );
    }
  `,
  demo: {
    title: "Mask",
    url: "https://storybook.letea.me/?path=/story/components-layout-6--mask"
  },
  kind: "Layout",
  type: "Component"
};

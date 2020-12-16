module.exports = {
  title: "HorizontalScroll",
  description: "A horizontal scroll effect for mobile devices.",
  defaultProps: `
    defaultProps = {
      hideScrollbar: true // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <HorizontalScroll>
          <YourElement />
          <YourElement />
          <YourElement />
          <YourElement />
          <YourElement />
        </HorizontalScroll>
      );
    }
  `,
  notes: [
    "The children should be display: 'inline-block' or 'inline-flex'.",
    "iOS hide scrollbar natively."
  ],
  demo: {
    title: "HorizontalScroll",
    url:
      "https://storybook.letea.me/?path=/story/components-element-3--horizontalscroll"
  },
  kind: "Element",
  type: "Component"
};

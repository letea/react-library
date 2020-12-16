module.exports = {
  title: "Marquee",
  description: "A marquee slider.",
  defaultProps: `
    defaultProps = {
      animationDuration: 40000, // optional, the unit is millisecond.
      isPausedOnHover: false // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <Marquee animationDuration={40000}>
          <YourElement />
          <YourElement />
          <YourElement />
          <YourElement />
          <YourElement />
        </Marquee>
      );
    }
  `,
  notes: ["The children should be 'display: inline-block' or 'inline-flex'."],
  demo: {
    title: "Marquee",
    url: "https://storybook.letea.me/?path=/story/components-element-3--marquee"
  },
  kind: "Element",
  type: "Component"
};

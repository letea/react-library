module.exports = {
  title: "LayoutTransition",
  description: "A layout of transition.",
  defaultProps: `
    defaultProps = {
      start: false, // required
      url: "", // required
      duration: 1000, // optional, value of animation-duration, unit is millisecond.
      frames: 0, // optional, value of animation-timing-function
      reverse: false, // optional, value of animation-direction
      infinite: false, // optional, value of animation-iteration-count
      forwards: false, // optional, value of animation-fill-mode
      onFinish: null // optional, trigger on animation end.
    }
  `,
  usage: `
    function Example() {
      return (
        <LayoutTransition
          start={true}
          url={"a.jpg"}
          duration={1000}
          frames={22}
          reverse={false}
          infinite={false}
          forwards={false}
          onFinish={() => {
            // do something...
          }}
        />
      );
    }
  `,
  demo: {
    title: "LayoutTransition",
    url:
      "https://storybook.letea.me/?path=/story/components-layout-6--layouttransition"
  },
  kind: "Layout",
  type: "Component"
};

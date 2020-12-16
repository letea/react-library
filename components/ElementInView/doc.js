module.exports = {
  title: "ElementInView",
  description:
    'To detect if the element is in the view of the browser. It will pass the "isInView" variable to children.',
  defaultProps: `
    defaultProps = {
      isDebug: false, // optional, will return size of window, bounding client rect of element and position if value is true.
      hasPosition: false, // optional, will return *xAxis and *yAxis if value is true. (the unit is percentage, xAxis is from left to right, yAxis is from top to bottom)
      offsetTop: 0, // optional, to set offset *top for element in view. (the unit is percentage, the value is relative to element's height)
      offsetRight: 0, // optional, to set offset *right for element in view. (the unit is percentage, the value is relative to element's width)
      offsetBottom: 0, // optional, to set offset *bottom for element in view. (the unit is percentage, the value is relative to element's height)
      offsetLeft: 0, // optional, to set offset *left for element in view. (the unit is percentage, the value is relative to element's width)
      onReady: () => {}, // optional, trigger when component is ready.
      onMove: () => {}, // optional, trigger when component moving.
      onEnter: () => {}, // optional, trigger when component enter the browser's view.
      onLeave: () => {} // optional, trigger when component leave the browser's view.
    }
  `,
  usage: `
    function Example() {
      return (
        <ElementInView hasPosition>
          <TargetElement />
        </ElementInView>
      );
    }
  `,
  demo: {
    title: "ElementInView",
    url:
      "https://storybook.letea.me/?path=/story/playground-components-element--elementinview"
  },
  kind: "Element",
  type: "Component"
};

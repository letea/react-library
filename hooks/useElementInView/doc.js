module.exports = {
  title: "useElementInView",
  description: "To detect if the element is in the view of the browser.",
  arguments: `
    arguments = {
      target: null, // required, could be DOM or Ref
      hasPosition: false, // optional, will return *xAxis and *yAxis if value is true. (the unit is percentage, xAxis is from left to right, yAxis is from top to bottom)
      isDebug: false,  // optional, will return size of window, bounding client rect of element and position if value is true.
      offsetTop: 0, // optional, to set offset *top for element in view. (the unit is percentage, the value is relative to element's height)
      offsetRight: 0, // optional, to set offset *right for element in view. (the unit is percentage, the value is relative to element's width)
      offsetBottom: 0, // optional, to set offset *bottom for element in view. (the unit is percentage, the value is relative to element's height)
      offsetLeft: 0 // optional, to set offset *left for element in view. (the unit is percentage, the value is relative to element's width)
    }
  `,
  usage: `
    // Basic
    const element = useElementInView({
      target: targetRef
    });
    // element => { 
    //   isInView // check is element in view. 
    // }

    // Basic with Position
    const element = useElementInView({
      target: targetRef,
      hasPosition: true
    });
    // element => { 
    //   isInView, 
    //   xAxis, => the xAxis of element.
    //   yAxis  => the yAxis of element. 
    // }

    // Debug
    const element = useElementInView({
      target: targetRef,
      isDebug: true
    });
    // element => { 
    //   isInView,
    //   xAxis,
    //   yAxis,
    //   windowWidth, => the width of window.
    //   windowHeight, => the height of window.
    //   top, => the top of element.
    //   right, => the right of element.
    //   bottom, => the bottom of element.
    //   left, => the left of element. 
    //   width, => the width of element.
    //   height => the height of element. 
    // }
  `,
  demo: {
    title: "useElementInView",
    url:
      "https://storybook.letea.me/?path=/story/playground-hooks-element--useelementinview"
  },
  kind: "Element",
  type: "Hooks"
};

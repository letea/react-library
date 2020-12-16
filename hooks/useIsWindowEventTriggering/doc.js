module.exports = {
  title: "useIsWindowEventTriggering",
  description:
    "Get a value to check if the event of the window is triggering or not.",
  arguments: `
    arguments = {
      eventName: "", // required, you can use "click", "mousemove", "resize", etc.
      duration: 150 // optional
    }
  `,
  usage: `
    const isResizing = useIsWindowEventTriggering({
      eventName: "resize",
      duration: 1500
    });
    // isResizing => true, false
  `,
  demo: {
    title: "useIsWindowEventTriggering",
    url:
      "https://storybook.letea.me/?path=/story/hooks-window-7--useiswindoweventtriggering"
  },
  notes: ["Here is a sample of the resize event."],
  kind: "Window",
  type: "Hooks"
};

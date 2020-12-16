module.exports = {
  title: "useWindowEvents",
  description:
    "Add multiple events to the window. You don't need to remove it manually. The best part is you can let events share a method or use each of the methods.",
  arguments: `
    arguments = {
      eventNames: [], // required, you can use "click", "mousemove", "resize", etc.
      callbacks: [] // required, you can push one method or methods with same length of eventNames.
    }
  `,
  usage: `
    useWindowEvents({
      eventNames: ["mousedown", "mouseup"],
      callbacks:[() => {
        // Do something...
      }]
    })
    // Trigger when mousedown or mouseup, share with a method.

    useWindowEvents({
      eventNames: ["mousedown", "mouseup"],
      callbacks:[() => {
        // Do something for mousedown event.
      }, () => {
        // Do something for mouseup event.
      }]
    })
    // Trigger when mousedown or mouseup, use each of methods.
  `,
  demo: {
    title: "useWindowEvents",
    url:
      "https://storybook.letea.me/?path=/story/hooks-window-7--usewindowevents"
  },
  kind: "Window",
  type: "Hooks"
};

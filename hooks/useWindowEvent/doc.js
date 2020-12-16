module.exports = {
  title: "useWindowEvent",
  description: "Add an event of window, you don't need to remove it manually.",
  arguments: `
    arguments = {
      eventName: "", // required, you can use "click", "mousemove", "resize", etc.
      callback: () => {} // optional
    }
  `,
  usage: `
    useWindowEvent({
      eventName: "click",
      callback:() => {
        // Do something...
      }
    })
  `,
  demo: {
    title: "useWindowEvent",
    url:
      "https://storybook.letea.me/?path=/story/hooks-window-7--usewindowevent"
  },
  kind: "Window",
  type: "Hooks"
};

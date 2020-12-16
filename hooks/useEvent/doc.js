module.exports = {
  title: "useEvent",
  description:
    "Add an event to an element. You don't need to remove it manually.",
  arguments: `
    arguments = {
      eventName: "", // required, you can use "click", "mousemove", "resize", etc.
      target: null, // required, could be DOM or Ref
      callback: () => {} // optional
    };
  `,
  usage: `
    useEvent({
      eventName: "click",
      target: targetRef,
      callback:() => {
        // Do something...
      }
    })
  `,
  demo: {
    title: "useEvent",
    url: "https://storybook.letea.me/?path=/story/hooks-event-2--useevent"
  },
  kind: "Event",
  type: "Hooks"
};

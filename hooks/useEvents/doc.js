module.exports = {
  title: "useEvents",
  description:
    "Add multiple events to elements. You don't need to remove it manually. The best part is you can let events share a/an method/element or use each of the methods/elements.",
  arguments: `
    arguments = {
      eventNames: [], // required, you can use "click", "mousemove", "resize", etc.
      targets: [], // required, could be DOM or Ref, you should push one target or targets with same length of eventNames.
      callbacks: [] // required, you should push one function or functions with same length of eventNames.
    }
  `,
  usage: `
    useEvents({
      eventNames: ["mousedown", "mouseup"],
      targets: [aRef],
      callbacks:[() => {
        // Do something for mousedown & mouseup
      }]
    })
    // Trigger when mousedown or mouseup, share with a function and an element.

    useEvents({
      eventNames: ["mousedown", "mouseup"],
      targets: [aRef],
      callbacks:[() => {
        // Do something for mousedown event.
      }, () => {
        // Do something for mouseup event.
      }]
    })
    // Trigger when mousedown or mouseup, use each of functions, share with an element.
  `,
  demo: {
    title: "useEvents",
    url: "https://storybook.letea.me/?path=/story/hooks-event-2--useevents"
  },
  notes: [
    "The length of eventNames should be equal to or greater than targets and callbacks."
  ],
  kind: "Event",
  type: "Hooks"
};

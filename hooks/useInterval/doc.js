module.exports = {
  title: "useInterval",
  description: "Allow you to use setInterval without handle clearInterval.",
  arguments: `
    arguments = {
      callback: () => {}, // optional
      duration: 0, // optional
      startInterval: true // optional, if the value is true, the interval will start.
    }
  `,
  usage: `
    useInterval({
      callback: () => {
        // Do something...
      },
      duration: 1000,
      startInterval: true
    });
  `,
  demo: {
    title: "useInterval",
    url: "https://storybook.letea.me/?path=/story/hooks-time-3--useinterval"
  },
  kind: "Time",
  type: "Hooks"
};

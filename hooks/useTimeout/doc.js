module.exports = {
  title: "useTimeout",
  description: "Allow you to use setTimeout without handle clearTimeout.",
  arguments: `
    arguments = {
      callback: () => {}, // optional
      duration: 0, // optional
      startTimeout: true // optional, if the value is true, the timeout will start.
    }
  `,
  usage: `
    useTimeout({
      callback: () => {
        // Do something...
      },
      duration: 1000,
      startTimeout: true
    });
  `,
  demo: {
    title: "useTimeout",
    url: "https://storybook.letea.me/?path=/story/hooks-time-3--usetimeout"
  },
  kind: "Time",
  type: "Hooks"
};

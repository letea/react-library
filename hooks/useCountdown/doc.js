module.exports = {
  title: "useCountdown",
  description: "Create a countdown.",
  arguments: `
    arguments = {
      defaultCounts: 0, // optional
      speed: 1000, // optional
      startCountdown: true, // optional, if the value is true, the interval will start.
      formatToHHMMSS: false // optional
    }
  `,
  usage: `
    const [counts, isFinish] = useCountdown({
      defaultCounts: 999,
      speed: 1000,
      formatToHHMMSS: false
    });
    // counts => 999
    // isFinish => false, true
  `,
  demo: {
    title: "useCountdown",
    url: "https://storybook.letea.me/?path=/story/hooks-time-3--usecountdown"
  },
  kind: "Time",
  type: "Hooks"
};

module.exports = {
  title: "useThrottleState",
  description: "useState with throttle!",
  arguments: `
    arguments = {
      defaultValue: "", // required
      throttleTime: 600 // optional
    }
  `,
  usage: `
    const [value, setValue] = useThrottleState({
      defaultValue: "Apple"
    });

    setValue("Banana");
  `,
  demo: {
    title: "useThrottleState",
    url:
      "https://storybook.letea.me/?path=/story/hooks-state-2--usethrottlestate"
  },
  kind: "State",
  type: "Hooks"
};

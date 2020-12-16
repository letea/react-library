module.exports = {
  title: "useDebounceState",
  description: "useState with debounce!",
  arguments: `
    arguments = {
      defaultValue: "", // required
      debounceTime: 600 // optional
    }
  `,
  usage: `
    const [value, setValue] = useDebounceState({
      defaultValue: "Apple"
    });

    setValue("Banana");
  `,
  demo: {
    title: "useDebounceState",
    url:
      "https://storybook.letea.me/?path=/story/hooks-state-2--usedebouncestate"
  },
  kind: "State",
  type: "Hooks"
};

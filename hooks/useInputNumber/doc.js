module.exports = {
  title: "useInputNumber",
  description: "Allow you to get or update the value of the input.",
  arguments: "",
  usage: `
    function Example() {
      const [value, setValue] = useInputNumber(0);

      return (
        <input type="number" defaultValue={value} onChange={setValue} />
      );
    }
  `,
  demo: {
    title: "useInputNumber",
    url: "https://storybook.letea.me/?path=/story/hooks-form-5--useinputnumber"
  },
  kind: "Form",
  type: "Hooks"
};

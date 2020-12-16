module.exports = {
  title: "useInputCheckbox",
  description: "Allow you to get or update the value of the checkbox.",
  usage: `
    function Example() {
      const [value, setValue] = useInputCheckbox(false);

      return (
        <input type="checkbox" defaultValue={value} onChange={setValue} />
      );
    }
  `,
  demo: {
    title: "useInputCheckbox",
    url:
      "https://storybook.letea.me/?path=/story/hooks-form-5--useinputcheckbox"
  },
  kind: "Form",
  type: "Hooks"
};

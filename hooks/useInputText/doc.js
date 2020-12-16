module.exports = {
  title: "useInputText",
  description: "Allow you to get or update the value of the input.",
  arguments: `
    // Basic
    argument = ""; // default text

    // Advance
    arguments = {
      defaultValue: "", // default text
      hasDebounce: false, // using debounce or not
      debounceTime: 600 // debounce time, it will work if hasDebounce is true
    }
  `,
  usage: `
    function BasicExample() {
      const [value, setValue] = useInputText("Message");

      return (
        <input type="text" defaultValue={value} onChange={setValue} />
      );
    }

    function AdvanceExample() {
      const [value, setValue] = useInputText({
        defaultValue: Message,
        hasDebounce: true,
        debounceTime: 600
      });

      return (
        <input type="text" defaultValue={value} onChange={setValue} />
      );
    }
  `,
  demo: {
    title: "useInputText",
    url: "https://storybook.letea.me/?path=/story/hooks-form-5--useinputtext"
  },
  notes: ["If you want to use a checkbox, check out the useInputCheckbox."],
  kind: "Form",
  type: "Hooks"
};

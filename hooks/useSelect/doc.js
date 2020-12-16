module.exports = {
  title: "useSelect",
  description: "Allow you to get or update the index of the select.",
  usage: `
    function Example() {
      const [index, setIndex] = useSelect(0);

      return (
        <select onChange={setIndex}>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </select>
      );
    }
  `,
  demo: {
    title: "useSelect",
    url: "https://storybook.letea.me/?path=/story/hooks-form-5--useselect"
  },
  kind: "Form",
  type: "Hooks"
};

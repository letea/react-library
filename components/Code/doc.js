module.exports = {
  title: "Code",
  description: "Display source code with syntax highlight.",
  defaultProps: `
    defaultProps = {
      code: "" // required
    }
  `,
  usage: `
    function Example() {
      return (
        <Code code="console.log('Hello World!');" />
      );
    }
  `,
  notes: ["Import Hack Typeface in the head of HTML for the best experience."],
  references: [
    { title: "highlight.js", url: "https://highlightjs.org/" },
    { title: "Hack", url: "https://sourcefoundry.org/hack/" }
  ],
  demo: {
    title: "Code",
    url: "https://storybook.letea.me/?path=/story/components-text-4--code"
  },
  kind: "Text",
  type: "Component"
};

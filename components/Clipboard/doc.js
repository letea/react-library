module.exports = {
  title: "Clipboard",
  description: "Allow users to copy text.",
  defaultProps: `
    defaultProps = {
      text: "", // optional
      isDebugMode: false, // optional
      onSuccess: () => {}, // optional
      onFail: () => {} // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <Clipboard text="Hello World!">Copy Text</Clipboard>
      );
    }
  `,
  references: [{ title: "clipboard.js", url: "https://clipboardjs.com/" }],
  demo: {
    title: "Clipboard",
    url: "https://storybook.letea.me/?path=/story/components-text-4--clipboard"
  },
  kind: "Text",
  type: "Component"
};

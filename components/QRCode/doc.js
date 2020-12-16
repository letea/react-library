module.exports = {
  title: "QRCode",
  description: "Convert text to QR code.",
  defaultProps: `
    defaultProps = {
      text: "", // optional
      width: 150, // optional
      height: 150 // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <QRCode text="Hello World!" />
      );
    }
  `,
  references: [{ title: "QR Code Generator", url: "http://goQR.me" }],
  demo: {
    title: "QRCode",
    url: "https://storybook.letea.me/?path=/story/components-text-4--qrcode"
  },
  kind: "Text",
  type: "Component"
};

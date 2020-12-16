module.exports = {
  title: "BackgroundFixedImage",
  description:
    "Allow you to have a fixed background image. Because of iOS Device does not support background-attachment: fixed.",
  defaultProps: `
    defaultProps = {
      image: "" // required
    }
  `,
  usage: `
    function Example() {
      return (
        <>
          <BackgroundFixedImage image="a.jpg" />
          <YourComponent />
        </>
      );
    }
  `,
  canIUse: ["background-attachment"],
  demo: {
    title: "BackgroundFixedImage",
    url:
      "https://storybook.letea.me/?path=/story/playground-components-background--backgroundfixedimage"
  },
  kind: "Background",
  type: "Component"
};

module.exports = {
  title: "BackgroundGallery",
  description: "A background with a gallery.",
  defaultProps: `
    defaultProps = {
      images: [], // required
      duration: 3000, // optional
      transition: 1000, // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <YourComponent>
          <BackgroundGallery images={["a.jpg", "b.jpg", "c.jpg"]} />
        </YourComponent>
      );
    }
  `,
  demo: {
    title: "Ghost of Tsushima",
    url:
      "https://storybook.letea.me/?path=/story/playground-websites--ghost-of-tsushima"
  },
  kind: "Background",
  type: "Component"
};

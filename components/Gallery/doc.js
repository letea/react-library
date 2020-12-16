module.exports = {
  title: "Gallery",
  description: "A simple gallery.",
  defaultProps: `
    defaultProps = {
      images: [], // required
      duration: 3000, // optional
      transition: 1000 // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <Gallery images={["a.jpg", "b.jpg", "c.jpg"]} />
      );
    }
  `,
  demo: {
    title: "Gallery",
    url: "https://storybook.letea.me/?path=/story/components-image-2--gallery"
  },
  kind: "Image",
  type: "Component"
};

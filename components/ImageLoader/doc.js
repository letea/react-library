module.exports = {
  title: "ImageLoader",
  description:
    "A component loads images and gives you a callback when images are loaded.",
  defaultProps: `
    defaultProps = {
      images: [], // required
      onEachLoad: (loadedImages) => {}, // optional
      onAllLoad: (loadedImages) => {} // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <ImageLoader
          images={["a.jpg", "b.jpg", "c.jpg"]}
          onEachLoad={loadedImages => {
            // Do something...
          }}
          onAllLoad={loadedImages => {
            // Do something...
          }}
        />
      );
    }
  `,
  demo: {
    title: "ImageLoader",
    url:
      "https://storybook.letea.me/?path=/story/components-image-2--imageloader"
  },
  kind: "Image",
  type: "Component"
};

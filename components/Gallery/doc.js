module.exports = {
  title: "Gallery",
  description: "A simple gallery.",
  defaultProps: `
    defaultProps = {
      // Required
      images: [],

      // Optional
      duration: 3000,
      transition: 1000,

      // CSS
      backgroundColor: null, // default is #000 in css
      backgroundSize: null, // default is cover in css
      position: null, // default is absolute in css
      zIndex: null, // default is 0 in css
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

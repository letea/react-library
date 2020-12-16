module.exports = {
  title: "BackgroundGalleryWithOrientation",
  description:
    "A background with a gallery feature. Support two types(portrait and landscape).",
  defaultProps: `
    defaultProps = {
      portraitImages: [], // require
      landscapeImages: [], // require
      duration: 3000, // optional
      transition: 1000 // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <YourComponent>
          <BackgroundGallery 
            portraitImages={["a.jpg", "b.jpg", "c.jpg"]}
            landscapeImages={["a.jpg", "b.jpg", "c.jpg"]}
          />
        </YourComponent>
      );
    }
  `,
  demo: {
    title: "BackgroundGalleryWithOrientation",
    url:
      "https://storybook.letea.me/?path=/story/playground-components-background--backgroundgallery-with-orientation"
  },
  kind: "Background",
  type: "Component"
};

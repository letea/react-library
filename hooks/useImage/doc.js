module.exports = {
  title: "useImage",
  description: "Get an image with status.",
  arguments: `
    arguments = {
      url: "", // required
      crossOrigin: false // optional
    }
  `,
  usage: `
    const [image, status] = useImage({
      url: "https://www.example.com/sample.jpg"
    });
    // image => "https://www.example.com/sample.jpg"
    // status => "loading", "loaded", "failed"
  `,
  demo: {
    title: "useImage",
    url: "https://storybook.letea.me/?path=/story/hooks-image-1--useimage"
  },
  kind: "Image",
  type: "Hooks"
};

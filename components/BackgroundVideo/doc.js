module.exports = {
  title: "BackgroundVideo",
  description: "A background with a video.",
  defaultProps: `
    defaultProps = {
      video: "", // required
      poster: "", // optional
      isFixed: false // optional, it will be position: absolute; if the value is false.
    }
  `,
  usage: `
    function Example() {
      return (
        <>
          <BackgroundVideo
            video="a.mp4"
            isFixed
          />
          <YourComponent />
        </>
      );
    }
  `,
  demo: {
    title: "TENET",
    url: "https://storybook.letea.me/?path=/story/playground-websites--tenet"
  },
  kind: "Background",
  type: "Component"
};

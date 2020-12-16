module.exports = {
  title: "FullscreenLoading",
  description: "Display a fullscreen loading.",
  defaultProps: `
    // openFullscreenLoading
    defaultProps = {
      Spinner: null, // Your spinner component
      zIndex: 9999, // optional
      backgroundColor: "rgba(0, 0, 0, 0.75)", // optional
      onClick: () => {}, // optional
    }    

    // closeFullscreenLoading
    defaultProps = {}
  `,
  usage: `
    function Example() {
      return (
        <>
          <YourComponent
            onClick={() => {
              openFullscreenLoading();
            }}
          />
          <YourComponent
            onClick={() => {
              closeFullscreenLoading();
            }}
          />
        </>
      );
    }
  `,
  demo: {
    title: "FullscreenLoading",
    url:
      "https://storybook.letea.me/?path=/story/components-layout-6--fullscreenloading"
  },
  kind: "Layout",
  type: "Component"
};

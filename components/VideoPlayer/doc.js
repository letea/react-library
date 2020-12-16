module.exports = {
  title: "VideoPlayer",
  description: "A video player uses the native interface.",
  defaultProps: `
    defaultProps = {
      src: "", // required
      poster: "", // optional
      hasControls: false, // optional
      hasContextMenu: false, // optional
      hasPreload: true, // optional
      isAutoPlay: false, // optional
      isPlaysInline: false, // optional
      isMuted: false, // optional
      isLoop: false, // optional
      isPauseOnBlur: false, // optional
      isCoverSize: false, // optional
      onCanPlay: event => {}, // optional
      onError: event => {}, // optional
      onPlay: event => {}, // optional
      onPlaying: event => {}, // optional
      onTimeUpdate: event => {}, // optional
      onPause: event => {}, // optional
      onEnded: event => {}, // optional
      onVolumeChange: event => {}, // optional
      onFullscreen: () => {}, // optional
      onFullscreenExit: () => {} // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <VideoPlayer src="a.mp4" />
      );
    }
  `,
  demo: {
    title: "VideoPlayer",
    url:
      "https://storybook.letea.me/?path=/story/components-media-1--videoplayer"
  },
  kind: "Media",
  type: "Component"
};

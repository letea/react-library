module.exports = {
  title: "useWindowOrientation",
  description:
    "Get the orientation of the window, including the resized window.",
  arguments: "",
  usage: `
    const { isLandscape, isPortrait } = useWindowOrientation();
    // isLandscape => true
    // isPortrait => false
  `,
  demo: {
    title: "useWindowOrientation",
    url:
      "https://storybook.letea.me/?path=/story/hooks-window-7--usewindoworientation"
  },
  kind: "Window",
  type: "Hooks"
};

module.exports = {
  title: "useScript",
  description: "Allow you to load script with URL.",
  arguments: `
    url = ""
  `,
  usage: `
    const isScriptLoaded = useScript("https://cdn.jsdelivr.net/npm/sweetalert2@10");
  `,
  demo: {
    title: "useScript",
    url: "https://storybook.letea.me/?path=/story/hooks-script-1--usescript"
  },
  notes: ["Base on useScript from useHooks."],
  references: [
    {
      title: "useScript React Hook - useHooks",
      url: "https://usehooks.com/useScript/"
    }
  ],
  kind: "Script",
  type: "Hooks"
};

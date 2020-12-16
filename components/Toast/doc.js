module.exports = {
  title: "Toast",
  description: "Display a message at the corner.",
  arguments: `
    // Basic
    message = "" // required

    // Advance
    {
      message: "", // required
      duration: 3000, // optional
      hasClose: false // optional
    }
  `,
  usage: `
    function Example() {
      return (
        <>
          <YourComponent onClick={() => {toast("Hello There");}}/>
          <YourComponent onClick={() => {toast({message: "Hello There", duration: 1500});}}/>
        </>
      );
    }
  `,
  demo: {
    title: "Toast",
    url:
      "https://storybook.letea.me/?path=/story/components-notification-1--toast"
  },
  kind: "Notification",
  type: "Component"
};

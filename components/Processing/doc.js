module.exports = {
  title: "Processing",
  description: "Allow you to write p5.js in React.",
  defaultProps: `
    defaultProps = {
      sketch: null, // (p5) => { /* your code */ }
      hasSoundLibrary: false, // Using p5.sound library or not
      isPositionFixed: false, // CSS default is absolute position
      zIndex: null // CSS default is 0
    }
  `,
  usage: `
    function Example() {
      const sketch = p5 => {
        p5.setup = () => {
          p5.createCanvas(p5.windowWidth, p5.windowHeight);
          p5.background(0)
        }

        p5.draw = () => {
          p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
        }
      };

      return (
        <Processing sketch={sketch} />
      );
    }
  `,
  notes: [
    'If you want to create a canvas full fill with parent element, use "p5.canvas.parentElement" to get width and height.',
    "If you want to use Amplitude from p5.sound, use window.p5 instead of p5 from parameter."
  ],
  demo: {
    title: "Processing",
    url:
      "https://storybook.letea.me/?path=/story/components-canvas-4--processing"
  },
  kind: "Canvas",
  type: "Component"
};

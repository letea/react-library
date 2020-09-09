// node modules
import React from "react";
import PropTypes from "prop-types";

// local modules - functions
import checkIsDesktop from "@letea/functions/checkIsDesktop";

// local files
import { Wrapper } from "./style";
class Flashlight extends React.Component {
  constructor(props) {
    super(props);
    this.resizeCanvas = this.resizeCanvas.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.drawCanvas = this.drawCanvas.bind(this);
    this.mouseX = props.defaultMouseX || window.innerWidth / 2;
    this.mouseY = props.defaultMouseY || window.innerHeight / 2;
    this.animationRequest = null;
    this.isMouseMode = checkIsDesktop();
    this.ref = React.createRef();
  }
  componentDidMount() {
    const { isMouseMode } = this;
    this.initCanvas();
    this.drawCanvas();
    window.addEventListener("resize", this.resizeCanvas);
    window.addEventListener(
      isMouseMode ? "mousemove" : "touchmove",
      this.updatePosition
    );
  }
  componentWillUnmount() {
    const { isMouseMode } = this;
    cancelAnimationFrame(this.animationRequest);
    window.removeEventListener("resize", this.resizeCanvas);
    window.removeEventListener(
      isMouseMode ? "mousemove" : "touchmove",
      this.updatePosition
    );
  }
  initCanvas() {
    const { ref } = this;
    const canvas = ref.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = "rgba(0, 0, 0, 1)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.closePath();
  }
  resizeCanvas() {
    this.initCanvas();
  }
  drawCanvas() {
    const { mouseX, mouseY, ref } = this;
    const canvas = ref.current;
    const context = canvas.getContext("2d");

    if (mouseX >= 0 && mouseY >= 0) {
      // Clear Rect
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Flashlight
      context.beginPath();
      context.arc(mouseX, mouseY, 3000, 0, Math.PI * 2);
      const gradient = context.createRadialGradient(
        mouseX,
        mouseY,
        Math.random() * 50 + 40,
        mouseX,
        mouseY,
        Math.random() * 30 + 170
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
      context.fillStyle = gradient;
      context.fill();
      context.closePath();

      // Request Animation
      this.animationRequest = requestAnimationFrame(this.drawCanvas);
    }
  }
  updatePosition(event) {
    const { clientX, clientY } = event.touches ? event.touches[0] : event;

    this.mouseX = clientX;
    this.mouseY = clientY;
  }
  render() {
    const { ref } = this;

    return <Wrapper ref={ref} />;
  }
}

Flashlight.propTypes = {
  defaultMouseX: PropTypes.number,
  defaultMouseY: PropTypes.number
};

export default Flashlight;

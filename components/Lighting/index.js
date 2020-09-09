// node modules
import React from "react";

// local modules - functions
import getRandomNumber from "@letea/functions/getRandomNumber";

// local files
import { Wrapper } from "./style";

class Lighting extends React.Component {
  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
    this.update = this.update.bind(this);
    this.draw = this.draw.bind(this);
    this.alpha = 0;
    this.frame = 0;
    this.animationRequest = null;
    this.canvas = React.createRef();
  }
  componentDidMount() {
    this.init();
    this.draw();
    window.addEventListener("resize", this.resize);
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.animationRequest);
    window.removeEventListener("resize", this.resize);
  }
  init() {
    const { canvas } = this;
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
  }
  resize() {
    this.init();
  }
  draw() {
    const { alpha, canvas } = this;
    const context = canvas.current.getContext("2d");
    const { width, height } = canvas.current;

    context.clearRect(0, 0, width, height);

    context.beginPath();
    context.fillStyle = `rgba(0, 0, 0, ${alpha})`;
    context.fillRect(0, 0, width, height);
    context.closePath();

    context.restore();

    this.animationRequest = requestAnimationFrame(this.update);
  }
  update() {
    const triggerFrame = getRandomNumber({
      maxNumber: 5,
      minNumber: 1
    });

    this.frame += 1;
    this.alpha =
      this.frame % triggerFrame === 0 ? Math.random() * 1 : this.alpha;

    this.draw();
  }
  render() {
    return <Wrapper ref={this.canvas} />;
  }
}

export default Lighting;

// node modules
import React from "react";
import PropTypes from "prop-types";

// local files
import { Wrapper, Canvas } from "./style";

class Scratcher extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.canvasRef = React.createRef();
    this.context = null;
    this.frame = 0;
    this.frameLoop = 0;
    this.framePerLoop = 60;
    this.FPS = props.FPS || 60;
    this.animationRequest = null;
    this.handleResize = this.handleResize.bind(this);
    this.handleScratchStart = this.handleScratchStart.bind(this);
    this.handleScratchEnd = this.handleScratchEnd.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.updateCanvas = this.updateCanvas.bind(this);
    this.state = {
      isStartScratch: false,
      isFinish: false,
      canvasCleanUpPercentage: 0
    };
  }
  componentDidMount() {
    this.initCanvas();
    this.initContext();
    this.adjustPixelRatio();
    this.drawBackground();
    this.updateCanvas();
    window.addEventListener("resize", this.handleResize);
  }
  componentDidUpdate(prevProps, prevState) {
    const { isStartScratch, isFinish, canvasCleanUpPercentage } = this.state;
    const { callback, callbackDelay, cleanUpPercentage } = this.props;

    if (canvasCleanUpPercentage > cleanUpPercentage && !isFinish) {
      this.setState({
        isFinish: true
      });
    } else if (!prevState.isFinish && isFinish) {
      if (callback) {
        setTimeout(() => {
          callback();
        }, callbackDelay);
      }
    } else if (prevState.isStartScratch && !isStartScratch) {
      this.getCanvasCleanUpPercentage();
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.cancelAnimationFrame(this.animationRequest);
  }
  initCanvas() {
    const { wrapperRef, canvasRef } = this;

    canvasRef.current.width = wrapperRef.current.offsetWidth;
    canvasRef.current.height = wrapperRef.current.offsetHeight;
  }
  initContext() {
    const { canvasRef } = this;
    this.context = canvasRef.current.getContext("2d");
  }
  adjustPixelRatio() {
    const { canvasRef } = this;
    let devicePixelRatio = window.devicePixelRatio; // 取得 devicePixelRatio
    let { width, height } = canvasRef.current.getBoundingClientRect(); // 獲取css的寬高

    // 根據 devicePixelRatio，擴大 canvas 畫布的像素，使1個canvas像素和 1 個物理像素相等
    canvasRef.current.width = devicePixelRatio * width;
    canvasRef.current.height = devicePixelRatio * height;

    // 由於畫布擴大，canvas 的坐標系也跟著擴大，如果按照原先的坐標系繪圖內容會縮小
    // 所以需要將繪制比例放大
    this.context.scale(devicePixelRatio, devicePixelRatio);
  }
  drawBackground() {
    const { context, canvasRef } = this;

    context.fillStyle = "#cccccc";
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }
  updateCanvas(x, y) {
    const { canvasRef, wrapperRef } = this;
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const context = canvasRef.current.getContext("2d");

    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(
      x - wrapperRect.left,
      y - wrapperRect.top,
      canvasRef.current.width / 15,
      0,
      Math.PI * 2
    );
    // context.fillStyle="salmon"
    context.fill();
  }
  getCanvasCleanUpPercentage() {
    const { canvasRef } = this;
    const context = canvasRef.current.getContext("2d");
    const pixels = context.getImageData(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    const pixelData = pixels.data;
    const total = pixelData.length;
    let finish = 0;

    pixelData.forEach((item) => {
      if (item === 0) {
        finish += 1;
      }
    });

    this.setState({
      canvasCleanUpPercentage: Math.floor((finish / total) * 100)
    });
  }
  handleResize() {
    this.initCanvas();
    this.initContext();
    this.adjustPixelRatio();
    this.drawBackground();
  }
  handleScratchStart() {
    this.setState({
      isStartScratch: true
    });
  }
  handleScratchEnd() {
    this.setState({
      isStartScratch: false
    });
  }
  handleMouseMove(event) {
    const { isStartScratch } = this.state;
    if (isStartScratch) {
      const x = event.clientX;
      const y = event.clientY;
      this.updateCanvas(x, y);
    }
  }
  handleTouchMove(event) {
    const { isStartScratch } = this.state;
    if (isStartScratch) {
      const x = event.targetTouches[0].clientX;
      const y = event.targetTouches[0].clientY;
      this.updateCanvas(x, y);
    }
  }
  render() {
    const { canvasRef, wrapperRef } = this;
    const { isFinish } = this.state;

    return (
      <Wrapper isFinish={isFinish} ref={wrapperRef}>
        <Canvas
          ref={canvasRef}
          onMouseDown={this.handleScratchStart}
          onMouseUp={this.handleScratchEnd}
          onMouseMove={this.handleMouseMove}
          onTouchStart={this.handleScratchStart}
          onTouchEnd={this.handleScratchEnd}
          onTouchMove={this.handleTouchMove}
        />
      </Wrapper>
    );
  }
}

Scratcher.defaultProps = {
  callback: null,
  callbackDelay: 300,
  cleanUpPercentage: 70,
  FPS: 60,
  isSupportCanvas: true,
  gradientColor1: "#bdb5af",
  gradientColor2: "#e7e7e7"
};

Scratcher.propTypes = {
  callback: PropTypes.func,
  callbackDelay: PropTypes.number,
  cleanUpPercentage: PropTypes.number,
  FPS: PropTypes.number,
  isSupportCanvas: PropTypes.bool,
  gradientColor1: PropTypes.string,
  gradientColor2: PropTypes.string
};

export default Scratcher;

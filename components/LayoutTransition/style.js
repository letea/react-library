// node modules
import styled, { css, keyframes } from "styled-components";

const keyframesWave = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
`;

const Wrapper = styled.div`
  animation-duration: 0ms;
  background-repeat: no-repeat;
  background-size: 100%;
  bottom: 0;
  display: none;
  height: 100%;
  left: 0;
  width: 100%;
  pointer-events: none;
  position: absolute;


  ${props =>
    props.zIndex &&
    css`
      z-index: ${props.zIndex};
    `}

  ${props =>
    props.isFixed &&
    css`
      position: fixed;
      transform: translate3d(0, 0, 0);
      width: 100vw;
      height: 100vh;
    `}

  ${props =>
    props.startAnimation &&
    css`
      display: block;
      animation-name: ${keyframesWave};
    `}

  ${props =>
    props.duration &&
    css`
      animation-duration: ${props.duration}ms;
    `}

  ${props =>
    props.frames &&
    css`
      animation-timing-function: steps(${props.frames - 1});
      background-size: 100% ${props.frames * 100}%;
    `}

  ${props =>
    props.reverse &&
    css`
      animation-direction: reverse;
    `}

  ${props =>
    props.infinite &&
    css`
      animation-iteration-count: infinite;
    `}

  ${props =>
    props.forwards &&
    css`
      animation-fill-mode: forwards;
    `}

  ${props =>
    props.url &&
    css`
      background-image: url(${props.url});
    `}
`;

export { Wrapper };

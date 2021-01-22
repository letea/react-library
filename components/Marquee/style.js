// node modules
import styled, { css, keyframes } from "styled-components";

const marqueeEffect = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
`;

const Content = styled.div`
  white-space: nowrap;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${marqueeEffect} 0ms infinite linear;

  ${(props) =>
    props.isPaused &&
    css`
      animation-play-state: paused;
    `}

  ${(props) =>
    props.isPausedOnHover &&
    css`
      &:hover {
        animation-play-state: paused;
      }
    `}

  ${(props) =>
    props.animationDuration &&
    css`
      animation-duration: ${props.animationDuration}ms;
    `}
`;

export { Wrapper, Content };

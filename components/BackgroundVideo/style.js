// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background: #000;
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  ${(props) =>
    props.isFixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
    `}
`;

const VideoContainer = styled.div`
  height: 100%;
  opacity: 0;
  transition: opacity 600ms;
  width: 100%;
  z-index: 0;

  ${(props) =>
    props.isPlaying &&
    css`
      opacity: 1;
    `}
`;

export { Wrapper, VideoContainer };

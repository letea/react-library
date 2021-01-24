// node modules
import styled, { css } from "styled-components";
import { position, background, color } from "styled-system";

const Wrapper = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translate3d(0, 0, 0);
  width: 100%;
  z-index: 0;

  ${position}
`;

const Image = styled.div`
  background-color: #000;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: none;
  z-index: 0;

  ${background}
  ${color}

  ${(props) =>
    props.image &&
    css`
      background-image: url(${props.image});
    `}

  ${(props) =>
    props.fade &&
    css`
      opacity: 0;
      transition: opacity 0ms;
    `}

  ${(props) =>
    props.transition &&
    css`
      transition-duration: ${props.transition}ms;
    `}
`;

export { Wrapper, Image };

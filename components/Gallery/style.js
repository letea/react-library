// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.div`
  background-position: center center;
  background-size: cover;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: none;

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
    `}

  ${props =>
    props.fade &&
    css`
      opacity: 0;
      transition: opacity 0ms;
    `}

  ${props =>
    props.transition &&
    css`
      transition-duration: ${props.transition}ms;
    `}
`;

export { Wrapper, Image };

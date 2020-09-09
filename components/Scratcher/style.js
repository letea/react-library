// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 600ms;
  user-select: none;

  ${props =>
    props.isFinish &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  touch-action: none;
`;

export { Wrapper, Canvas };

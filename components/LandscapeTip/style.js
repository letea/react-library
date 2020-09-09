// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  display: flex;
  height: 100%;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition: opacity 300ms;
  transform: translate3d(0, 0, 0);
  width: 100%;

  ${props =>
    props.zIndex &&
    css`
      z-index: ${props.zIndex};
    `}

  @media (orientation: landscape) {
    display: flex;
    opacity: 1;
    pointer-events: auto;
  }
`;

const Message = styled.div`
  display: block;
  margin: auto;
  position: relative;
  text-align: center;
`;

export { Wrapper, Message };

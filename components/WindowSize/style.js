// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  color: #111;
  font-size: 14px;
  padding: 6px 8px;
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  user-select: none;

  ${(props) =>
    props.isFixed &&
    css`
      position: fixed;
      transform: translate3d(0, 0, 0);
    `}

  ${(props) =>
    props.zIndex &&
    css`
      z-index: ${props.zIndex};
    `}

  ${(props) =>
    props.hide &&
    css`
      opacity: 0;
      transition: opacity 150ms;
    `}
`;

export { Wrapper };

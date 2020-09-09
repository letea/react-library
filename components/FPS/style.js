// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  color: #111;
  font-size: 14px;
  min-width: 72px;
  padding: 6px 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  user-select: none;

  ${props =>
    props.isFixed &&
    css`
      position: fixed;
      transform: translate3d(0, 0, 0);
    `}

  ${props =>
    props.zIndex &&
    css`
      z-index: ${props.zIndex};
    `}
`;

export { Wrapper };

// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

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

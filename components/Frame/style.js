// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background-blend-mode: difference;
  background-image: linear-gradient(
      rgba(130, 130, 130, 0.5) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgb(130, 130, 130, 0.5) 1px, transparent 1px),
    linear-gradient(rgba(130, 130, 130, 0.25) 1px, transparent 1px),
    linear-gradient(90deg, rgba(130, 130, 130, 0.25) 1px, transparent 1px);
  background-position: -1px -1px, -1px -1px, -1px -1px, -1px -1px;
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

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
`;

export { Wrapper };

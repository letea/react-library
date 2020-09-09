// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background-position: center center;
  background-size: cover;
  display: none;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transform: translate3d(0, 0, 0);
  width: 100%;
  z-index: -1;

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
      display: block;
    `}
`;

export { Wrapper };

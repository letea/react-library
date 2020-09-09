// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  box-sizing: content-box;
  width: 100%;

  ${props =>
    props.debug &&
    css`
      background-color: rgba(255, 0, 0, 0.5);
    `}

  ${props =>
    props.active &&
    css`
      display: flex;
    `}
`;

const Content = styled.div`
  ${props =>
    props.debug &&
    css`
      background-color: rgba(0, 255, 0, 0.5);
    `}

  ${props =>
    props.active &&
    css`
      align-self: center;
      margin: auto;
    `}
`;

export { Wrapper, Content };

// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  align-content: center;
  display: flex;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

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

const Container = styled.div`
  margin: auto;
  text-align: center;
`;

const Progress = styled.div`
  font-size: 1.2em;
  margin-bottom: 0.25em;
`;

const Tips = styled.div`
  font-size: 0.8em;
`;

const Resource = styled.div`
  display: none;
`;

export { Wrapper, Container, Progress, Tips, Resource };

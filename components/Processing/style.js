import styled, { css, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #p5_loading {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
  z-index: 0;

  ${(props) =>
    props.isPositionFixed &&
    css`
      position: fixed;
    `}

  ${(props) =>
    props.zIndex &&
    css`
      z-index: props.zIndex;
    `}
`;

export { GlobalStyle, Wrapper };

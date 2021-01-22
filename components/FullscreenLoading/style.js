// node modules
import styled, { css, keyframes } from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  transform: translate3d(0, 0, 0);
  width: 100%;
  z-index: 99990;

  ${(props) =>
    props.zIndex &&
    css`
      z-index: ${props.zIndex};
    `}

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;

const donutSpin = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;

const ExampleSpinner = styled.div`
  animation: ${donutSpin} 0.6s linear infinite;
  border: 4px solid #fff;
  border-left-color: #1d8b71;
  border-radius: 50%;
  display: inline-block;
  height: 30px;
  margin-bottom: 0.5rem;
  width: 30px;
`;

const ExampleTips = styled.div`
  color: #fff;
  font-size: 0.625rem;
  font-weight: bold;
`;

export { Wrapper, ExampleSpinner, ExampleTips };

// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: #d6d6d6;
  border-radius: 2px;
  border: 1px solid #aaa;
  cursor: pointer;
  position: relative;
  transition: background 0.6s;
  user-select: none;
  will-change: background;

  ${(props) =>
    props.isActive &&
    css`
      background: rgb(29, 138, 113);
    `}
`;

const Button = styled.div`
  background: #fff;
  border-radius: 2px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translate3d(0, 0, 0);
  transition: transform 0.15s;
  width: 50%;
  will-change: transform;

  ${(props) =>
    props.isActive &&
    css`
      transform: translate3d(100%, 0, 0);
    `}
`;

export { Wrapper, Button };

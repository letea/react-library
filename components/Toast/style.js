// node modules
import styled, { css } from "styled-components";

// local modules - functions
import checkIsDesktop from "@letea/functions/checkIsDesktop";

const Container = styled.div`
  top: 0.75rem;
  font-family: Arial, Helvetica, sans-serif;
  left: 0;
  margin: auto;
  max-width: 17.5rem;
  min-width: 15.625rem;
  position: fixed;
  right: 0;
  text-align: center;
  transform: translate3d(0, 0, 0);
  width: 80%;

  ${props =>
    props.isLongText &&
    css`
      width: 95%;
      max-width: 25rem;
    `}

  @media screen and (min-width: 768px) {
    top: initial;
    bottom: 0.75rem;
    left: initial;
    right: 0.75rem;
    text-align: right;
    width: 25%;

    ${props =>
      props.isLongText &&
      css`
        width: 40%;
        max-width: 20rem;
      `}
  }
`;

const Wrapper = styled.div`
  background: #fff;
  border-radius: 2px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  color: #333;
  display: inline-block;
  line-height: normal;
  margin: auto;
  opacity: 0;
  text-align: left;
  transition: opacity 150ms, transform 300ms;
  width: 100%;
  cursor: pointer;
  transform: translate3d(0, -1rem, 0);

  @media screen and (min-width: 768px) {
    transform: translate3d(0, 1rem, 0);
  }

  ${props =>
    props.isShow &&
    css`
      opacity: 1;
      transform: translate3d(0, 0, 0) !important;
    `}

  ${props =>
    props.hasClose &&
    css`
      cursor: default;
    `}
`;

const Content = styled.div`
  position: relative;
`;

const Link = styled.a`
  text-decoration: none;

  &,
  &:visited {
    color: #1d8a71;
  }

  ${checkIsDesktop() &&
  css`
    &:hover {
      text-decoration: underline;
    }
  `}
`;

const Message = styled.div`
  box-sizing: border-box;
  font-size: 0.8rem;
  line-height: 1.5;
  width: 100%;
  padding: 0.75rem;

  ${props =>
    props.hasClose &&
    css`
      border-right: 1px solid #ddd;
      /* padding-right: 0.75rem; */
      width: 80%;
    `}
`;

const CloseButton = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 20%;

  svg {
    fill: #666;
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    svg {
      fill: #000;
    }
  }
`;

export { Container, Wrapper, Content, Link, Message, CloseButton };

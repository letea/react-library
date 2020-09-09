// node modules
import styled, { css } from "styled-components";

const Video = styled.video`
  background-color: #000;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  margin: auto;
  outline: none;
  width: 100%;
  z-index: 2;

  ${props =>
    props.posterSrc &&
    css`
      background-image: url(${props.posterSrc});
    `}

  ${props =>
    props.isCoverSize &&
    css`
      object-fit: cover;
    `}

  ${props =>
    props.isAbsolute &&
    css`
      position: absolute;
      top: 0;
      left: 0;
    `}
`;

export { Video };

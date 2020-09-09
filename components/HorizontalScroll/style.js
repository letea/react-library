// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  -webkit-overflow-scrolling: touch;
  cursor: grab;
  line-height: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  ${props =>
    props.hideScrollbar &&
    css`
      &::-webkit-scrollbar {
        display: none;
      }
    `}
`;

export { Wrapper };

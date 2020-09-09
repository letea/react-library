// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  font-weight: bold;
  display: inline-block;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ccc;
  transition: color 150ms;

  &:hover {
    color: #fff;
  }

  /* Primary Style */
  ${props => props.primary && css``}
`;

export { Wrapper };

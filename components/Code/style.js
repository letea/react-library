// node modules
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: none;
  font-family: "Hack", "PingFang TC", "Roboto", "Microsoft JhengHei",
    "Helvetica", "Arial", sans-serif;
  font-size: 0.8rem;

  code {
    line-height: 1.5;
    padding: 1rem;
  }

  @media (min-width: 414px) {
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  ${props =>
    props.isInit &&
    css`
      display: block;
    `}
`;

export { Wrapper };

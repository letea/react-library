import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background: #fff;
  }
`;

const withBodyNoInlineStyle = (Story, context) => {
  useEffect(() => {
    document.body.style = null;
  }, []);

  return <Story {...context} />;
};

const withDefaultStyleForDarkTheme = (Story, context) => {
  return (
    <>
      <GlobalStyle />
      <Story {...context} />
    </>
  );
};

export const decorators = [withBodyNoInlineStyle, withDefaultStyleForDarkTheme];

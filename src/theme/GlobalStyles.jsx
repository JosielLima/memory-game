import { css, Global } from "@emotion/react";
import theme from "./theme";

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap");

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html,
      body {
        font-family: "Atkinson Hyperlegible", sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: ${theme.colors.text.primary};
        background-color: ${theme.colors.secondary.main};
      }

      h1 {
        font-size: ${theme.typography.fontSize.h1};
        font-weight: ${theme.typography.fontWeight.bold};
        line-height: ${theme.typography.lineHeight.h1};
        margin-bottom: ${theme.spacing.lg};
      }

      h2 {
        font-size: ${theme.typography.fontSize.h2};
        font-weight: ${theme.typography.fontWeight.bold};
        line-height: ${theme.typography.lineHeight.h2};
        margin-bottom: ${theme.spacing.md};
      }

      h3 {
        font-size: ${theme.typography.fontSize.h3};
        font-weight: ${theme.typography.fontWeight.bold};
        line-height: ${theme.typography.lineHeight.h3};
        margin-bottom: ${theme.spacing.sm};
      }

      p {
        margin-bottom: ${theme.spacing.md};
      }

      button {
        font-family: "Atkinson Hyperlegible", sans-serif;
      }

      .game-number {
        font-size: 48px;
        font-weight: ${theme.typography.fontWeight.bold};
        color: ${theme.colors.text.primary};
      }
    `}
  />
);

export default GlobalStyles;

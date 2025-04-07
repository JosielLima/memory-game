import { css } from "@emotion/react";

const baseButtonStyles = css`
  border-radius: 24px;
  padding: 0.9rem 2.5rem;
  font-weight: bold;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  font-family: "Atkinson Hyperlegible", sans-serif;
  transition: background-color 0.3s;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

const theme = {
  colors: {
    primary: {
      main: "#FDA214",
      light: "#BCCED9",
      dark: "#304859",
      contrast: "#152938",
    },
    secondary: {
      main: "#F2F2F2",
      light: "#6395B8",
      dark: "#7191A5",
      contrast: "#FCFCFC",
    },
    text: {
      primary: "#152938",
      secondary: "#7191A5",
      light: "#F2F2F2",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  typography: {
    fontFamily: '"Atkinson Hyperlegible", sans-serif',
    fontSize: {
      h1: "3rem",
      h2: "2rem",
      h3: "1.5rem",
      body: "1rem",
      small: "0.875rem",
      button: "2rem",
    },
    fontWeight: {
      regular: 400,
      bold: 700,
    },
    lineHeight: {
      h1: 1.2,
      h2: 1.3,
      h3: 1.4,
      body: 1.5,
    },
  },
  buttons: {
    primary: {
      idle: css`
        ${baseButtonStyles};
        background-color: #f0a214;
        color: white;
        &:hover {
          background-color: #e59400;
        }
      `,
      hover: css`
        ${baseButtonStyles};
        background-color: #fac061;
        color: white;
      `,
    },
    secondary: {
      idle: css`
        ${baseButtonStyles};
        background-color: #bcbcb9;
        color: #fff;
      `,
      hover: css`
        ${baseButtonStyles};
        background-color: #6395b8;
        color: white;
      `,
      active: css`
        ${baseButtonStyles};
        background-color: #152938;
        color: #fff;
      `,
    },
    menu: {
      active: css`
        ${baseButtonStyles};
        background-color: #394459;
        color: white;
      `,
      hover: css`
        ${baseButtonStyles};
        background-color: #3979da;
        color: white;
      `,
      idle: css`
        ${baseButtonStyles};
        background-color: #bcbcb9;
        color: #394459;
        &:hover {
          background-color: #a8a8a5;
        }
      `,
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "2.5rem",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "16px",
    extra: "20px",
  },
  media: {
    mobile: "only screen and (max-width: 600px)",
    tablet: "only screen and (min-width: 601px) and (max-width: 1024px)",
    desktop: "only screen and (min-width: 1025px)",
  },
};

export default theme;

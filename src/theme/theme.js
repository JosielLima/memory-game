import { css } from "@emotion/react";

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
        background-color: #f0a214;
        color: white;
        border-radius: 24px;
        padding: 12px 24px;
        font-weight: bold;
        font-size: 2rem;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        font-family: "Atkinson Hyperlegible", sans-serif;
        cursor: pointer;
        &:hover {
          background-color: #e59400;
        }
      `,
      hover: css`
        background-color: #fac061;
        color: white;
        border-radius: 25px;
        padding: 12px 24px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        font-family: "Atkinson Hyperlegible", sans-serif;
      `,
    },
    secondary: {
      idle: css`
        background-color: #bcbcb9;
        color: #fff;
        border-radius: 24px;
        padding: 8px 16px;
        font-weight: bold;
        font-size: 2rem;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        font-family: "Atkinson Hyperlegible", sans-serif;
      `,
      hover: css`
        background-color: #6395b8;
        color: white;
        border-radius: 24px;
        padding: 8px 16px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        font-family: "Atkinson Hyperlegible", sans-serif;
      `,
      active: css`
        background-color: #152938;
        color: #fff;
        border-radius: 24px;
        padding: 8px 16px;
        font-weight: bold;
        font-size: 2rem;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        font-family: "Atkinson Hyperlegible", sans-serif;
      `,
    },
    menu: {
      active: css`
        background-color: #394459;
        color: white;
        border-radius: 24px;
        padding: 8px 24px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        font-family: "Atkinson Hyperlegible", sans-serif;
      `,
      hover: css`
        background-color: #3979da;
        color: white;
        border-radius: 25px;
        padding: 8px 24px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        font-family: "Atkinson Hyperlegible", sans-serif;
      `,
      idle: css`
        background-color: #bcbcb9;
        color: #394459;
        border-radius: 24px;
        padding: 8px 24px;
        font-weight: bold;
        font-size: 2rem;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        font-family: "Atkinson Hyperlegible", sans-serif;
        &:hover {
          background-color: #a8a8a5;
        }
      `,
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "16px",
    extra: "20px",
  },
};

export default theme;

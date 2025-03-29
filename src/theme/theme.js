import { css } from "@emotion/react";

const theme = {
  colors: {
    primary: {
      main: "#F0A214",
      light: "#BCBCB9",
      dark: "#394459",
      darker: "#152518",
    },
    secondary: {
      main: "#F2F2F2",
      light: "#719145",
      dark: "#3979DA",
      darker: "#FCFCFC",
    },
    text: {
      primary: "#394459",
      secondary: "#719145",
      light: "#F2F2F2",
    },
    rgb: {
      primary: {
        main: "240, 162, 20",
        light: "188, 188, 185",
        dark: "57, 68, 89",
        darker: "21, 37, 24",
      },
      secondary: {
        main: "242, 242, 242",
        light: "113, 145, 69",
        dark: "57, 121, 218",
        darker: "252, 252, 252",
      },
    },
  },
  typography: {
    fontFamily: '"Atkinson Hyperlegible", sans-serif',
    fontSize: {
      h1: "48px",
      h2: "32px",
      h3: "24px",
      body: "16px",
      small: "14px",
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
        border-radius: 25px;
        padding: 12px 24px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        font-family: "Atkinson Hyperlegible", sans-serif;
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
        color: #394459;
        border-radius: 25px;
        padding: 8px 16px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        font-family: "Atkinson Hyperlegible", sans-serif;
        &:hover {
          background-color: #a8a8a5;
        }
      `,
      hover: css`
        background-color: #3979da;
        color: white;
        border-radius: 25px;
        padding: 8px 16px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        font-family: "Atkinson Hyperlegible", sans-serif;
      `,
    },
    menu: {
      active: css`
        background-color: #394459;
        color: white;
        border-radius: 25px;
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
        border-radius: 25px;
        padding: 8px 24px;
        font-weight: bold;
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
    pill: "25px",
  },
};

export default theme;

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Playing from "./pages/Playing";
import Start from "./pages/Start";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import GlobalStyles from "./theme/GlobalStyles";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/playing" element={<Playing />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
);

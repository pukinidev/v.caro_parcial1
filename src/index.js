import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import {IntlProvider} from 'react-intl';
import { CssBaseline } from "@mui/material";
import theme from "./components/utils/theme";
import reportWebVitals from "./reportWebVitals";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const locale = navigator.language;
const messages = locale === "es" ? localeEsMessages : localeEnMessages;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages= {messages}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

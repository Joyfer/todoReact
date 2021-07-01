import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Theme MUI
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import brown from "@material-ui/core/colors/brown";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";


const theme = createMuiTheme({
  palette: {
    primary: { main: brown[300] },
    success: {main: green[700]},
    error: {main: red[800]}
  },
  typography: {
    fontFamily: ["Rubik", "sansSerif"].join(","),
  },
});
// Theme MUI end

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

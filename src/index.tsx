import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    overrides: {
        MuiSlider: {
            thumb: {
                color: "black",
            },
            track: {
                color: "white",
            },
            rail: {
                color: "white",
            },
            valueLabel: {
                color: "black",
            },
        },
    },
    palette: {
        primary: {
            main: "#1b1f23",
        },
        text: {
            secondary: "#ffffff",
        },
        secondary: {
            main: "#FFD6C",
            contrastText: "black",
        },
        action: {
            disabledBackground: "#585d63",
            disabled: "black",
        },
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "Poppins",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        allVariants: {
            color: "white",
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { ContentProvider } from "./context/ContentContext";

try {
  // Wait, App has <Router> which is BrowserRouter. We need an App without BrowserRouter.
  console.log("App has BrowserRouter inside it.");
} catch(e) {
  console.error(e);
}

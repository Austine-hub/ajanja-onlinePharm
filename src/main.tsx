import React from "react";
import { createRoot } from "react-dom/client"; // use named import
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // remove .tsx extension
import "./index.css";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


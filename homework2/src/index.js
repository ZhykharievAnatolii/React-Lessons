import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Application/App";

const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

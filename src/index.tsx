import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./styles.css";

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(<App />);
}
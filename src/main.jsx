import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Context from "./context/context.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
  <Context>
    <App /> 
  </Context>
);

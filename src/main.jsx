import React from "react";
import { render } from "preact";
import { App } from "./app.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
render(
  <div>
    <App />
    <ToastContainer />
  </div>,
  document.getElementById("app")
);

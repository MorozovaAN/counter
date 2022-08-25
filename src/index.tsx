import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />{" "}
  </BrowserRouter>,
  document.getElementById("root")
);
// Что надо написать вместо ххх,
// чтобы при клике список заметок очищался?

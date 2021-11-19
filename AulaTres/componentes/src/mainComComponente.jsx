import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function PrimeiroComponente() {
  return <h1>Olá mundo</h1>;
}

ReactDOM.render(<PrimeiroComponente />, document.getElementById("root"));

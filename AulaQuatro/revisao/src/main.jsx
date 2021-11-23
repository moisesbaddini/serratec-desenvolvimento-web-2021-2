import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const prato_preferido = [
  "miojo de tomate",
  "Strogonoff",
  "lasanha",
  "pipoca",
  "pão de queijo",
  "empadão",
  "batata frita",
  "risoto",
  "lasanha",
  "lasanha de abobrinha",
  "nhoque",
  "lasanha",
  "Lasanha",
  "Batata frita",
  "Churrasco",
  "Pizza",
  "risoto",
  "Escondidinho de camarão ",
  "hamburguer",
  "lasanha",
  "nhoque bolonhesa",
  "hamburguer",
  "risoto",
  "Nhoque",
  "Churrasco",
  "nata do china",
];

function fn(prato) {
  return prato.toLowerCase().substr(0, "lasanha".length) == "lasanha";
}

const novo = prato_preferido.filter(fn);

const grupo = {};

function agrupar(acumulado, item) {
  acumulado[item] = 1;
}

const reduzido = prato_preferido.reduce(agrupar, grupo);

ReactDOM.render(novo, document.getElementById("root"));

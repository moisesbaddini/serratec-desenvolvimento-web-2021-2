import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const pessoa = { nome: "Augusto", sobrenome: "Cury" };

let nome = pessoa.nome;
nome = pessoa["sobrenome"];
console.log(pessoa.nome);

ReactDOM.render(pessoa, document.getElementById("root"));

const lista = ["a", "b", "c", "d"];

//for (let i = 0; i < lista.length; i++)

for (let item of lista) {
  console.log(item);
}

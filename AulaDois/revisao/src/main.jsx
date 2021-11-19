import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/*
let site = "bem vindo ao meu site";

//Novo objeto da classe Date
let hoje = new Date();
//Apenas a data
site = hoje.toLocaleDateString();
//Define hora, minuto, segundo
hoje.setHours(0, 0, 0);
//Data e hora
site = hoje.toLocaleString();

ReactDOM.render(site, document.getElementById("root"));
*/

//Exercício - Dia da semana
let hoje = new Date();
const semana = ["Domingo", "Segunda", "Terça", "Quarta-feira", "Quinta"];
let dia = hoje.getDay();
const diaSemana = semana[dia];
const texto = `Hoje é ${diaSemana} sim!`;
ReactDOM.render(texto, document.getElementById("root"));

//Expressão
2 + 2 - 3

//Declaração
Integer numero = if ;
String texto = while;

if (expressao == verdade)
  console.log('vai')

`  ola ${2 + hoje.toDateString()}`



function maneira (numero) {
  while (numero < 10)
  numero = numero * 2

  return numero;
}


` A resposta é ${maneira(7)}`

var nome = 'Moisés';
var saudacao = "";

if (nome == "")
  saudacao = "ola sujeito";
else
  saudacao = "olá " + nome;
  
saudacao = (nome == "") ? "ola sujeito" : "olá " + nome;
saudacao = se (nome == "") entao "ola sujeito" senao "olá " + nome;
saudacao = (nome == "") ? "quer se identificar" ? "sim" : "nao" : nome;

if (nome != "" && nome == "braya")
  resposta = "braya"
else
  resposta = ""
*/
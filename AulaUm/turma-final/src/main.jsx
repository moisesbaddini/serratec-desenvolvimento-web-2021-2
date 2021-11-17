import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


let nome = "Zepa";

nome = "outro";

nome = 'braya';

const sql = "SELECT" +
"  *" +
"FROM " +
"  TABELA.CAMPO";

var saudacao = `Olá ${nome}, seja bem vindo!`;

function minhaFuncao() {
  return "ola mundo dentro da funcao";
}

nome = minhaFuncao();

ReactDOM.render(
  saudacao, 
  document.getElementById('root')
)

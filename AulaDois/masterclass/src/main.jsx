import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/*
let paragrafo = (
  <div>
    <p>Créditos do hugo</p>
    <img src="https://cdn.discordapp.com/attachments/813476819495944203/909313509190414366/b1165164-37ac-4d4e-9384-63fbab367f2f.png" />
    <textarea rows={5} />
  </div>
);
/*
var texto = `uma coisa ${3 + 3 - 2} fim`;

var painel = <div id="painel">Conteúdo</div>;
var campo = <input type="text" readOnly />;

var div = <div className="azul"></div>;

ReactDOM.render(paragrafo, document.getElementById("root"));


let nome = "Maria";
let elemento = <p>Boa noite {paragrafo}</p>;
//let elemento = <p>Boa noite {`querida ${nome}`} </p>;

var final = (
  <div>
    <h1>Teste</h1>
    {elemento}
    <footer>Copyright 2021 Zepa</footer>
  </div>
);

ReactDOM.render(final, document.getElementById("root"));
//ReactDOM.render(elemento, document.getElementById("menu"));
*/

/*
//const semana = new Array(7);
const semana = [];

semana[0] = "Domingo";
semana.push(" ");
semana.push("Segunda");
semana[3] = 42;
semana[4] = true;
semana.push(new Date().toISOString());
let p = <p>Outro elemento</p>;
semana.push(p);

//ReactDOM.render(semana, document.getElementById("root"));

const frutas = [<em>🍓</em>, <strong>🍍</strong>, <span>🍉</span>];
let feira = <p>{frutas}</p>;

ReactDOM.render(feira, document.getElementById("root"));
*/
/*
let itens = [<li key={1}>A</li>, <li key={2}>B</li>, <li key={34}>C</li>];
let lista = <ol>{itens}</ol>;

ReactDOM.render(lista, document.getElementById("root"));
*/

function cliquei() {
  alert("Cara clicou no botão");
}

let botao = <button onClick={cliquei}>Clique aqui</button>;
ReactDOM.render(botao, document.getElementById("root"));

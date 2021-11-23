import React from "react";
import "./App.css";

function App() {
  //let nome = "Moisés";
  //Retorno de useState == um array
  let estado_nome = React.useState("Moisés"); //["Moisés", fn]
  let estado_numero = React.useState(40);

  console.log("tamanho do array", estado_nome.length);
  console.log(estado_nome);
  let nome = estado_nome[0];
  let setNome = estado_nome[1];

  let numero = estado_numero[0];
  let setNumero = estado_numero[1];

  function troca() {
    let segundo = new Date().getSeconds();
    setNome(segundo);
    //alert("nome:" + nome);
  }

  console.log("App foi renderizado");

  //  const incrementa = () => setNumero(numero + 1);

  function incrementa() {
    setNumero(numero + 1);
  }

  const mexeTudo = () => {
    troca();
    incrementa();
  };

  return (
    <div className="App">
      <p>Estados</p>
      <p>{nome}</p>
      <p>Numero: {numero}</p>
      <button onClick={troca}>Troca o nome</button>
      <button onClick={incrementa}>Incrementar Numero</button>
      <button onClick={mexeTudo}>Mexer nos dois</button>
    </div>
  );
}

export default App;

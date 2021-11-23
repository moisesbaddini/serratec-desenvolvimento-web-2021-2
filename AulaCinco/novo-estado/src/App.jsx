import React from "react";
import "./App.css";

function App() {
  //O useState é um mordomo que vai ao banco de dados/guarda roupa do React
  //1. useState devolve == o valor que está armazenado
  //2. useState == função para trocar o valor que está lá no guarda-roupa

  const st_estilo = React.useState({ background: "lime" });
  const estilo = st_estilo[0];
  const setEstilo = st_estilo[1];

  //Regra de negócio - Domínio do cliente|área de atuação|Lógica da empresa
  const manipulador = () => {
    const cores = ["yellow", "green", "red", "tomato", "lime"];
    const nro = Math.floor(Math.random() * cores.length);
    setEstilo({ background: cores[nro] });

    //setEstilo({ margin: "100px" });
    //    if (estilo.background == "lime") setEstilo({ background: "tomato" });
    //    else setEstilo({ background: "lime" });
  };

  return (
    <div className="App">
      <h3>Cor: {estilo.background}</h3>
      <button style={estilo} onClick={manipulador}>
        Mudar a cor
      </button>
    </div>
  );
}

export default App;

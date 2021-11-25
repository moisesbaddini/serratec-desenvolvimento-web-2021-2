import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import Menu from "./Menu";

function App() {
  const [count, setCount] = useState(0);
  const [outroCont, setOutro] = useState(15);

  console.log("renderizando");

  const callback = () => console.log("passou no useEffect");
  useEffect(callback, [count, outroCont]);

  function manipulador(event) {
    console.log(event);
    let nome = prompt("Digite seu nome");
  }

  function soma(valor1, valor2) {
    return valor1 + valor2;
  }

  soma(2, 2);

  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <p>Formulário</p>
        <Formulario />
        {/*
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button type="button" onClick={() => setOutro((count) => count + 1)}>
            outro: {outroCont}
          </button>

          <button onClick={manipulador}>Nome</button>
          <button onClick={manipulador}>Endereço</button>
          <button onClick={manipulador}>Bairro</button>
        </p>
        */}
      </header>
    </div>
  );
}

export default App;

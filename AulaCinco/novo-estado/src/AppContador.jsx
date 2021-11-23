import React from "react";
import "./App.css";

function App() {
  const estado_contador = React.useState(0);
  const contador = estado_contador[0];
  const setContador = estado_contador[1];

  return (
    <div className="App">
      <h3>Contador: {contador}</h3>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar o contador
      </button>
    </div>
  );
}

export default App;

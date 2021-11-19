import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pastel from "./Pastel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Lista de pastel!</p>

        <Pastel sabor="Galinha" />
        <Pastel sabor="Frango com catupiry" />
        <Pastel sabor="Palmito" />
      </header>
    </div>
  );
}

export default App;

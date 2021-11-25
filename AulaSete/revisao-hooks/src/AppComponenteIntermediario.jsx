import { useState, useEffect } from "react";
import Menu from "./Menu";
import PaginaInicial from "./PaginaInicial";

function App() {
  const [menu, setMenu] = useState("");

  const definirMenu = (local) => {
    setMenu(local);
  };

  return (
    <div className="App">
      <Menu />
      <div>
        <button onClick={() => definirMenu("home")}>Home</button>
        <button onClick={() => definirMenu("cadastro")}>Cadastro</button>
        <button onClick={() => definirMenu("sobre")}>Sobre</button>
      </div>

      <PaginaInicial menu={menu} />
    </div>
  );
}

export default App;

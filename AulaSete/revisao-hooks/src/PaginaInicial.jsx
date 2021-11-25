import React from "react";
import Formulario from "./Formulario";
import Home from "./Home";
import Sobre from "./Sobre";

function PaginaInicial(props) {
  switch (props.menu) {
    case "home":
      return <Home />;
      break;
    case "cadastro":
      return <Formulario />;
      break;
    case "sobre":
      return <Sobre />;
    default:
      return <h4>Clique num dos botões</h4>;
  }
}

export default PaginaInicial;

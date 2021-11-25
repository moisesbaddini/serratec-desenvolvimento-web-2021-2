import React from "react";
import Formulario from "./Formulario";
import Home from "./Home";

function PaginaInicial(props) {
  if (props.menu == "home") return <Home />;
  if (props.menu == "cadastro") return <Formulario />;

  return <h4>Clique num dos botões</h4>;
}

export default PaginaInicial;

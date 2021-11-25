import { useState, useEffect } from "react";
import Menu from "./Menu";
import PaginaInicial from "./PaginaInicial";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sobre from "./Sobre";
import Formulario from "./Formulario";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sobre" component={Sobre} />
        <Route path="/cadastro" component={Formulario} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

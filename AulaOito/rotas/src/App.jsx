import { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Frutas from "./Frutas";
import FrutasCor from "./FrutasCor";
import Preferencias from "./Preferencias";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <p>Programa novo</p>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/preferencias">Preferências</Link>
      {" | "}
      <Link to="/frutas">Frutas</Link>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/preferencias" exact>
          <Preferencias />
        </Route>

        <Route path="/frutas" component={Frutas} exact />
        <Route path="/frutas/:cor" component={FrutasCor} exact />

        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Produtos from "./Produtos";
import ProdutoDetalhe from "./ProdutoDetalhe";
import Sobre from "./Sobre";

function App() {
  return (
    <BrowserRouter>
      <p>Loja</p>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/preferencias">Carrinho</Link>
      {" | "}
      <Link to="/sobre">Sobre o sistema</Link>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produtos" component={Produtos} exact />
        <Route path="/produtos/:id" component={ProdutoDetalhe} exact />
        <Route path="/sobre" component={Sobre} exact />

        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

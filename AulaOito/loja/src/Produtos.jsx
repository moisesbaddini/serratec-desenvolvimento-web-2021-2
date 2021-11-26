import React from "react";
import api from "./api";
import { Link } from "react-router-dom";

function Produtos() {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(consultar, []);

  function consultar() {
    const listar = (res) => setProdutos(res.data);
    api.get("/produtos").then(listar);
  }

  return (
    <>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>
            {p.title} <Link to={`/produtos/${p.id}`}>Detalhes</Link>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Produtos;

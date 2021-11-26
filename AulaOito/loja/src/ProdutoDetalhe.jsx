import React from "react";
import api from "./api";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Patria = styled.div`
  background: #0f0;
  border: 2px solid #fff;
  color: #ff0;
  padding: 8px;
`;

const Botao = styled.button`
  background: ${(props) => (props.desabilitado ? "yellow" : "cyan")};
  color: ${(props) => (props.cor ? props.cor : "rgb(128, 0, 96)")};
  padding: 15px;
  border-radius: 3px;
  margin: 20px;
  font-weight: ${(props) => props.tipo};
`;

function ProdutoDetalhe() {
  const { id } = useParams();
  const [produto, setProduto] = React.useState({});

  React.useEffect(consultar, []);

  function consultar() {
    const exibir = (res) => setProduto(res.data);
    api.get(`/produtos/${id}`).then(exibir);
  }

  return (
    <>
      <h1>Detalhe</h1>
      <Botao tipo="normal" onClick={() => alert("Paçoca")} desabilitado={true}>
        Clique aqui
      </Botao>
      <Botao tipo="bold" cor="red">
        Segundo
      </Botao>
      <Patria>
        <p>{id}</p>
      </Patria>
      <p>Produto: {produto.title}</p>
      <img src={produto.imagem} />
    </>
  );
}

export default ProdutoDetalhe;

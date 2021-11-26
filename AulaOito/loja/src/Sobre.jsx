import React from "react";
import styled from "styled-components";
import BotaoTema from "./BotaoTema";

const Main = styled.main`
  margin: 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);

  background-color: ${(props) => (props.tema == "escuro" ? "#282c34" : "#fff")};
  color: ${(props) => (props.tema == "escuro" ? "#fff" : "")};
`;

function Sobre() {
  const [tema, setTema] = React.useState("claro");

  const valor = (m) => (m == "escuro" ? "claro" : "escuro");
  const alternar = () => setTema(valor);

  return (
    <Main tema={tema}>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Sobre a loja de livros</h1>
        <div className="col-lg-6 mx-auto">
          <BotaoTema onClick={alternar} tema={tema}>
            Trocar para {valor(tema)}
          </BotaoTema>
        </div>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Essa loja foi feita com 💚 pelo Zepa para os alunos Serratec.
          </p>
        </div>
      </div>
    </Main>
  );
}

export default Sobre;

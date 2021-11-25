import React from "react";
import Formulario from "./Formulario";

function Home(props) {
  const logado = false;

  return (
    <>
      <h2>Bem-vindo a nossa loja</h2>
      {logado ? (
        <span style={{ background: "lime" }}>Zepa</span>
      ) : (
        <>
          <span style={{ background: "tomato" }}>Visitante</span>
          <div className="alert alert-danger" role="alert">
            Faça seu login!
          </div>
        </>
      )}
    </>
  );
}

export default Home;

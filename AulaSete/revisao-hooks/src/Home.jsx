import React from "react";
import Formulario from "./Formulario";

function Home(props) {
  const logado = true;
  const admin = true;
  const niveis = ["estagiario", "dev", "gerente", "jedi"];
  const nivel = niveis[3];

  return (
    <>
      <h2>Bem-vindo a nossa loja</h2>
      {logado && <span style={{ background: "lime" }}>Zepa</span>}

      {admin && (
        <>
          <span style={{ background: "tomato" }}>Visitante</span>
          <div className="alert alert-danger" role="alert">
            Faça seu login!
          </div>
        </>
      )}

      {logado && admin && <strong>Área de administrador</strong>}

      {nivel == "estagiario" && <p>Área do Aspone</p>}
      {nivel == "dev" && <p>Área do Dev</p>}
      {nivel == "gerente" && <p>Área do Manda chuva</p>}
      {nivel == "jedi" && <p>Área espacial</p>}
    </>
  );
}

export default Home;

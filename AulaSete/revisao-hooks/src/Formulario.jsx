import React from "react";
import axios from "axios";
import CampoTexto from "./CampoTexto";

function Formulario() {
  const [nome, setNome] = React.useState("");
  const [curso, setCurso] = React.useState("");
  const [aceito, setAceito] = React.useState(true);

  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    function resposta(res) {
      console.log(res.data);
    }

    let novo = { nome, curso };
    api.post("/alunos", novo).then(resposta);
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome do aluno</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Digite seu nome"
          ></input>
        </div>
        <div>
          <label htmlFor="curso">Curso</label>
          <input
            type="text"
            name="curso"
            id="curso"
            value={curso}
            onChange={(event) => {
              console.log(event.target.value);
              setCurso(event.target.value);
            }}
            placeholder="Digite o curso"
          ></input>
        </div>
        <div>
          <input
            type="checkbox"
            id="aceito"
            name="aceito"
            checked={aceito}
            onChange={(e) => setAceito(e.target.checked)}
          ></input>{" "}
          Aceito o contrato
        </div>

        <CampoTexto titulo="Disciplina" />
        <CampoTexto titulo="Campus" />
        <CampoTexto titulo="Periodo" />
        <CampoTexto titulo="Matricula" />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;

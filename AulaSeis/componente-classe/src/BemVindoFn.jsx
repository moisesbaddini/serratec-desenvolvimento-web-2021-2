import React from "react";
import axios from "axios";

function BemVindoFn() {
  const [alunos, setAlunos] = React.useState([]);

  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  console.log("Houve renderização");

  const consultar = () => {
    console.log("chamou o efeito");
    const processar = (response) => {
      let novo = response.data;
      setAlunos(novo);
    };
    api.get("/alunos").then(processar);
  };

  React.useEffect(consultar, []);

  return (
    <div>
      <h3>Alunos</h3>
      <button onClick={consultar}>Consultar em Função</button>
      <table>
        <thead>
          <tr>
            <th>Nome do Aluno</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.nome}</td>
              <td>{aluno.curso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BemVindoFn;

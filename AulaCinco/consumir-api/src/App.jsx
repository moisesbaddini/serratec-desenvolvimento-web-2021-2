import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [alunos, setAlunos] = useState([
    { id: 1, nome: "Zando", curso: "Culinaria" },
    { id: 2, nome: "Bil", curso: "Origami" },
    { id: 3, nome: "Bile", curso: "Jean" },
  ]);

  const chamadaAPI = () => {
    const api = axios.create({
      baseURL: "http://localhost:8080/",
    });

    function listar(res) {
      console.log(res.data);
      setAlunos(res.data);
    }

    api.get("/alunos").then(listar);
  };

  return (
    <div className="App">
      <h1>Alunos</h1>
      <button onClick={chamadaAPI}>Consultar</button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
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

export default App;

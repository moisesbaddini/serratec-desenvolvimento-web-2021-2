import React from "react";
import axios from "axios";

class BemVindo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: [],
    };

    this.api = axios.create({
      baseURL: "http://localhost:8080",
    });
  }

  //Evento de ciclo de vida - LifeCycle methods
  //did mount - montagem
  //did update - atualização|render
  //will unmount - desmontagem
  componentDidMount() {
    console.log("Passou no mount");
    this.consultar();

    document.title = "Meus alunos";
  }

  consultar = () => {
    const processar = (response) => {
      let novo = { alunos: response.data };
      this.setState(novo);
    };
    this.api.get("/alunos").then(processar);
  };

  render() {
    return (
      <div>
        <h3>Alunos</h3>
        <button onClick={this.consultar}>Consultar</button>
        <table>
          <thead>
            <tr>
              <th>Nome do Aluno</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {this.state.alunos.map((aluno) => (
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
}

export default BemVindo;

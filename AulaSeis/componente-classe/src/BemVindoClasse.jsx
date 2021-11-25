import React from "react";

class BemVindo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: "Marilia", contador: 0 };
  }

  manipulador = () => {
    let novo = {
      contador: this.state.contador + 1,
    };
    this.setState(novo);
  };

  //Prompt == didático
  mudarNome = () => {
    let nome = prompt("Qual o novo nome?");
    this.setState({ nome });
  };

  render() {
    return (
      <div>
        <h2>Olá visitante {this.state.nome}</h2>
        <h3>Você já acessou {this.state.contador} vezes</h3>
        <button onClick={this.manipulador}>Aumentar</button>
        <button onClick={this.mudarNome}>Mudar o nome</button>
      </div>
    );
  }
}

export default BemVindo;

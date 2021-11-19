import Rotulo from "./Rotulo";

function NomeDaMusica(props) {
  let estilo = {
    margin: "20px",
    background: "#def",
    border: "1px solid #000",
    textAlign: "center",
  };

  return (
    <div style={estilo}>
      <Rotulo nome="Artista" />
      {props.artista}
      <br />
      <Rotulo nome="Música" />
      {props.musica}
    </div>
  );
}

export default NomeDaMusica;

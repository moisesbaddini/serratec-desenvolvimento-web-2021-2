function Musica(props) {
  const { musica, eventoModificar } = props;
  const eventoApagar = props.eventoApagar;

  const estilo = { background: "yellow", margin: "20px", listStyle: "none" };
  estilo.background = musica.ouvi ? "purple" : "yellow";

  return (
    <li style={estilo}>
      {musica.nome} = {musica.ouvi ? "🥰" : "🤫"}
      <br />
      <a href="#" onClick={eventoModificar}>
        Marcar como {!musica.ouvi ? "✔️" : "❌"}
      </a>{" "}
      |{" "}
      <a href="#" onClick={props.eventoApagar}>
        Apagar
      </a>
    </li>
  );
}

export default Musica;

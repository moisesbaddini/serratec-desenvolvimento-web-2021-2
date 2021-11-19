function Rotulo(props) {
  let estilo = { color: "tomato" };
  return <strong style={estilo}>{props.nome}: </strong>;
}

export default Rotulo;

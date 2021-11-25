import React from "react";

function CampoTexto(props) {
  const [nome, setNome] = React.useState("");

  return (
    <div>
      <label htmlFor="nome">{props.titulo}</label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

export default CampoTexto;

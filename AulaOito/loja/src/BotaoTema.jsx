import styled from "styled-components";

const BotaoTema = styled.button`
  background-color: ${(props) =>
    props.tema == "escuro" ? "chocolate" : "#aaa"};
  color: ${(props) => (props.tema == "escuro" ? "white" : "chocolate")};

  margin: 8px;
  padding: 0.25em 1em;
  border: 2px solid chocolate;
  border-radius: 3px;
`;

export default BotaoTema;

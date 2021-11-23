import { useState } from "react";
import "./App.css";
import Musica from "./Musica";

function App() {
  const listaMusicas = [
    { id: 1, nome: "Tá rocheda", ouvi: true },
    { id: 2, nome: "Metal contra as Nuvens", ouvi: true },
    { id: 3, nome: "Recairei", ouvi: false },
  ];

  const lst = listaMusicas.map((musica) => {
    musica.texto = musica.ouvi ? "ouvi" : "não ouvi";
    return musica;
  });

  //State
  const [lista, setLista] = useState(lst);

  //Prompt para efeito didático
  const handle = () => {
    let nome = prompt("Qual o nome da música?");
    let novo = { id: lista.length + 1, nome, ouvi: true };
    let arr = [...lista];
    arr.push(novo);
    setLista(arr);
  };

  const modificar = (id) => {
    /*
    const musica = lista.find(function procura(item) {
      if (item.id == id) return true;
    });

    if (!musica) return;

    musica.ouvi = !musica.ouvi;

    let arr = [...lista, musica];
    setLista(arr);
    */

    const arr = lista.map((item) => {
      if (item.id == id) item.ouvi = !item.ouvi;
      return item;
    });
    setLista(arr);
  };

  const remover = (id) => {
    const arr = lista.filter((item) => item.id !== id);
    setLista(arr);
  };

  return (
    <div className="App">
      <h1>Minhas músicas ouvidas</h1>

      <ol>
        {lista.map((musica) => (
          <div>
            <Musica
              key={musica.id}
              musica={musica}
              eventoModificar={() => modificar(musica.id)}
              eventoApagar={() => remover(musica.id)}
            />
            {/*            <button onClick={() => modificar(musica.id)}>Modificar</button>
            <button onClick={() => remover(musica.id)}>Apagar</button>
        **/}
          </div>
        ))}
      </ol>

      <button onClick={handle}>Nova música</button>
    </div>
  );
}

export default App;

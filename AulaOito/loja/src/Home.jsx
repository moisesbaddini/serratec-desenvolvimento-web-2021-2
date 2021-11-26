import BotaoTema from "./BotaoTema";
import Produtos from "./Produtos";

function Home() {
  return (
    <div>
      <h2>Home da loja</h2>
      <BotaoTema tema={"escura"}>Botão maneiro</BotaoTema>
      <Produtos />
    </div>
  );
}

export default Home;

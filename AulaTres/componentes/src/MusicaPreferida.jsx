import Fusca from "./Fusca";
import NomeDaMusica from "./NomeDaMusica";

function MusicaPreferida() {
  return (
    <div>
      <NomeDaMusica artista="Barões" musica="Unha de Gel" />
      <NomeDaMusica artista="Rouge" musica="Ragatanga" />
      <NomeDaMusica artista="Nirvana" musica="Smells like spirit" />
      <NomeDaMusica artista="Barões" musica="Recairei" />
      <NomeDaMusica artista="AC/DC" musica="Back and Black" />

      <Fusca placa="ABC1R47" cor="amarelo" chassi={474552} />
    </div>
  );
}

export default MusicaPreferida;

const alunos = [
  "Erick",
  "Augusto",
  "Rodrigo",
  "Vitor",
  "Hugo",
  "osiris",
  "Matheus",
  "Brayan",
  "Caio",
  "Helton",
  "Vitor",
  "Isabela",
  "Deborah",
  "Tatiana",
  "Patricia",
  "Mariana",
  "Gustavo",
  "Weridiana",
  "Camilla",
  "Renato",
  "Leonardo",
  "joaoLuiz",
  "Michael",
  "Caroline",
  "Jana",
  "Pedor",
  "JoãoPedro",
  "Paula",
];

function fn(nome) {
  let letra = nome.substr(0, 1);
  return letra == "M";
}

alunos.filter(fn);

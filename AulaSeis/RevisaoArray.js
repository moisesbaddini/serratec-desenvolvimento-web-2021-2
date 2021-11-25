//aluno = id | nome | curso | disciplina
//CREATE TABLE

var tabela = [];
const UFs = [
  { id: 1, sigla: "ES" },
  { id: 2, sigla: "MG" },
  { id: 3, sigla: "SP" },
  { id: 4, sigla: "RJ" },
];

//SELECT COUNT(*) FROM tabela
console.log(tabela.length);

//INSERT INTO tabela (id, nome, curso, disciplina)
//VALUES (1, "Billy", "Gastronomia", "Pães")
let novo = {
  id: 1,
  nome: "Billy",
  uf: 1,
  curso: "Gastronomia",
  disciplina: "Pães",
};
tabela.push(novo);
novo = {
  id: 2,
  nome: "Gil",
  uf: 1,
  curso: "Música",
  disciplina: "Partituras",
};
tabela.push(novo);
novo = {
  id: 3,
  nome: "Braya",
  uf: 2,
  curso: "Música",
  disciplina: "Teclado",
};
tabela.push(novo);
novo = {
  id: 4,
  nome: "Pedro",
  uf: 3,
  curso: "Música",
  disciplina: "Violino",
};
tabela.push(novo);
novo = {
  id: 5,
  nome: "Matias",
  uf: 3,
  curso: "Informática",
  disciplina: "Mouse e teclado",
};
tabela.push(novo);

//SELECT nome FROM tabela
let nomes = tabela.map((item) => item.nome);
console.log(nomes);

//SELECT * FROM tabela WHERE SUBSTRING(nome FROM 1 TO 1) = 'B'
//SELECT * FROM tabela WHERE nome LIKE 'B%'
let letraB = tabela.filter((item) => item.nome.substr(0, 1) == "B");
console.log(letraB);

//UPDATE tabela SET nome = UPPER(nome) WHERE (id = 2)
for (let item of tabela) {
  if (item.id == 2) item.nome = item.nome.toUpperCase();
}

console.log(tabela);

//Iterador
/*
Se condição atende único registro == find
Se múltiplos registros == filter
*/

let idDois = tabela.find((item) => item.id == 2);
if (idDois) {
  idDois.nome = idDois.nome.toLowerCase();
}
console.log(idDois);

//DELETE FROM tabela WHERE (curso = 'Música')
let semMusica = [];
tabela.forEach((linha) => {
  if (linha.curso !== "Música") semMusica.push(linha);
});
console.log("Sem música", semMusica);

let semM = tabela.filter((item) => item.curso !== "Gastronomia");
console.log("Sem Gastronomia", semM);

/*
  SELECT T.* FROM tabela T
  JOIN UFs U ON (T.uf = U.id)
  WHERE (T.sigla = 'SP')
 */

let ufSP = UFs.find((item) => item.sigla == "SP");
let id = ufSP.id;

let paulistas = tabela.filter((item) => item.uf == id);
console.log("paulistas", paulistas);

//Spread
let aGastronomia = tabela.filter((item) => item.curso == "Gastronomia");
let aInfor = tabela.filter((item) => item.curso == "Informática");

let joinCursos = [...aGastronomia, ...aInfor];
console.log("joinCursos", joinCursos);

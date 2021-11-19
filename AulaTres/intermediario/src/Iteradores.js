const lista = ["a", "b", "c", "d"];

for (let item of lista) {
  console.log(item);
}

console.log("fim");

//Função de manipulação
function paraCada(item) {
  console.log("lambda " + item);
}

//forEach
lista.forEach(paraCada);

function paraCadaItem(item) {
  return "Bom dia " + item;
}

//map
//const lista = ["a", "b", "c", "d"];
let retorno = lista.map(paraCadaItem);

console.log("O retorno foi", retorno);

//filter
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//Lambda
//Equivalente ao where do SQL
function funcaoDeFiltro(cadaItemDoArray) {
  return cadaItemDoArray % 2 == 0;
}

let pares = numeros.filter(funcaoDeFiltro);

console.log("filtrados números pares", pares);

/*
 A partir do array com os nomes dos alunos, gerar um novo array
 apenas dos alunos que começam com M. Usando o iterador filter.
*/

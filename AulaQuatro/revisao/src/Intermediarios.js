function Anonima(parametro) {
  return "tenho nome sim";
}

const fnAnonima = function (params) {
  return "sem identificador";
};

let retorno = fnAnonima("oi");

/*
let operacao = '-'

if (operacao == '+')
  calculo = soma
else
  calculo = diminui

calculo = function multiplicar (a, b) { return a * b }

calculo(2, 3) //6

*/

/*
const lista = ["a", "b", "c", "d", "e"];


const maiusculas = lista.map(function (item) {
    return item.toUpperCase();
  });

console.log(maiusculas);

*/

/*
function quadrado(x) {
  return x * x
}
*/

//arrow
const quadrado = (x) => x * x;
quadrado(4);

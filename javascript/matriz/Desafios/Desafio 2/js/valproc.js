function valproc(){
// DESAFIO 2
// O programa pede os valores de uma matriz 4x3
// e calcula a soma de todos os elementos

let matriz = [];
let soma = 0;

for (let i = 0; i < 4; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    let valor = parseFloat(prompt("Digite o valor da posição [" + (i+1) + "][" + (j+1) + "]:"));
    matriz[i][j] = valor;
    soma += valor;
  }
}

console.log("Soma de todos os elementos da matriz: " + soma);
}
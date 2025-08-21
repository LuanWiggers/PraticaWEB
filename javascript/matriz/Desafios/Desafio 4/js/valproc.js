function valproc(){
// DESAFIO 4
// O programa pede os valores de uma matriz 4x5
// e calcula a soma de cada linha e a soma total

let matriz4x5 = [];
let somaTotal = 0;

for (let i = 0; i < 4; i++) {
  matriz4x5[i] = [];
  for (let j = 0; j < 5; j++) {
    let valor = parseInt(prompt("Digite o valor da posição [" + (i+1) + "][" + (j+1) + "]:"));
    matriz4x5[i][j] = valor;
  }
}

for (let i = 0; i < 4; i++) {
  let somaLinha = 0;
  for (let j = 0; j < 5; j++) {
    somaLinha += matriz4x5[i][j];
    somaTotal += matriz4x5[i][j];
  }
  console.log("Soma da linha " + (i+1) + ": " + somaLinha);
}

console.log("Soma total de todos os elementos da matriz: " + somaTotal);
}
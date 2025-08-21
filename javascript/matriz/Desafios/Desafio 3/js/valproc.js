function valproc(){
// DESAFIO 3
// O programa pede os valores de uma matriz 5x5
// e gera outra matriz com o dobro dos valores

let matrizOriginal = [];
let matrizDobro = [];

for (let i = 0; i < 5; i++) {
  matrizOriginal[i] = [];
  matrizDobro[i] = [];
  for (let j = 0; j < 5; j++) {
    let valor = parseInt(prompt("Digite o valor da posição [" + (i+1) + "][" + (j+1) + "]:"));
    matrizOriginal[i][j] = valor;
    matrizDobro[i][j] = valor * 2;
  }
}

console.log("Matriz original:");
console.table(matrizOriginal);

console.log("Matriz com o dobro:");
console.table(matrizDobro);
}
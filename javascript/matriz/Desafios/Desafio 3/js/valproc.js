let matrizOriginal = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

let matrizDobro = [];

for (let i = 0; i < matrizOriginal.length; i++) {
  matrizDobro[i] = []; // cria a linha vazia
  for (let j = 0; j < matrizOriginal[i].length; j++) {
    matrizDobro[i][j] = matrizOriginal[i][j] * 2;
  }
}

console.log("Matriz original:");
console.table(matrizOriginal);

console.log("Matriz com o dobro:");
console.table(matrizDobro);

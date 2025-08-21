let matriz = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

let somaTotal = 0;

for (let i = 0; i < matriz.length; i++) {
  let somaLinha = 0;
  for (let j = 0; j < matriz[i].length; j++) {
    somaLinha += matriz[i][j];
    somaTotal += matriz[i][j];
  }
  console.log("Soma da linha " + (i + 1) + ": " + somaLinha);
}

console.log("Soma de todos os elementos da matriz: " + somaTotal);

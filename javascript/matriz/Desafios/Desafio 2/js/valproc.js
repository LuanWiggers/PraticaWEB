let matriz = [
  [1.5, 2.0, 3.5],
  [4.0, 5.5, 6.0],
  [7.5, 8.0, 9.5],
  [10.0, 11.5, 12.0]
];

let soma = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
}

console.log("Soma de todos os elementos da matriz: " + soma);

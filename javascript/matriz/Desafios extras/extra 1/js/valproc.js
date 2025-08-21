function valproc(){
// O programa pede os valores de uma matriz 4x4
// e mostra os valores das diagonais (principal e secundária)

// Criar a matriz vazia
let matriz = [];

// Preencher a matriz com valores digitados pelo usuário
for (let i = 0; i < 4; i++) {
  matriz[i] = []; // cria uma linha
  for (let j = 0; j < 4; j++) {
    let valor = parseInt(prompt("Digite o valor para posição [" + i + "][" + j + "]:"));
    matriz[i][j] = valor;
  }
}

// Mostrar a matriz
console.log("Matriz completa:");
console.table(matriz);

// Diagonal principal = quando i == j
console.log("Diagonal principal:");
for (let i = 0; i < 4; i++) {
  console.log(matriz[i][i]);
}

// Diagonal secundária = quando i + j == tamanho - 1
console.log("Diagonal secundária:");
for (let i = 0; i < 4; i++) {
  console.log(matriz[i][3 - i]);
}
}
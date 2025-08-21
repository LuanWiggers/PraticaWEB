function valproc(){
// DESAFIO 1
// Prédio com 6 andares e 4 apartamentos por andar
// O programa pede as rendas e calcula o total e a média

let predio = [];
let total = 0;
let quantidade = 0;

for (let i = 0; i < 6; i++) {
  predio[i] = [];
  for (let j = 0; j < 4; j++) {
    let renda = parseFloat(prompt("Digite a renda do apartamento [" + (i+1) + "][" + (j+1) + "]:"));
    predio[i][j] = renda;
    total += renda;
    quantidade++;
  }
}

let media = total / quantidade;

console.log("Renda total do prédio: R$ " + total.toFixed(2));
console.log("Média de renda: R$ " + media.toFixed(2));
}
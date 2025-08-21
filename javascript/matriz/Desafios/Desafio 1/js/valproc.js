// Criando matriz com as rendas
let predio = [
  [2000, 2500, 1800, 2200], // andar 1
  [3000, 1500, 2100, 2600], // andar 2
  [1700, 2000, 2400, 1900], // andar 3
  [2500, 2300, 2800, 2200], // andar 4
  [2100, 2500, 2300, 2000], // andar 5
  [2600, 2700, 2500, 3000]  // andar 6
];

let total = 0;
let quantidade = 0;

for (let i = 0; i < predio.length; i++) {         // percorre os andares
  for (let j = 0; j < predio[i].length; j++) {    // percorre os apartamentos
    total += predio[i][j];  // soma todas as rendas
    quantidade++;           // conta quantos apartamentos existem
  }
}

let media = total / quantidade;

console.log("Renda total do prédio: R$ " + total);
console.log("Média de renda: R$ " + media.toFixed(2));

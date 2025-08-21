// EXTRA 2
// Supermercado Alegria - controle de compras dos 3 clientes nos 3 últimos meses

// Vetor para guardar os nomes
let clientes = [];
// Matriz para guardar os valores das compras (3 clientes x 3 meses)
let compras = [];

// Entrada de dados
for (let i = 0; i < 3; i++) {
  let nome = prompt("Digite o nome do cliente " + (i + 1) + ":");
  clientes.push(nome);

  compras[i] = [];
  for (let j = 0; j < 3; j++) {
    let valor = parseFloat(prompt("Digite o valor da compra do mês " + (j + 1) + " de " + nome + " (se não comprou, digite 0):"));
    compras[i][j] = valor;
  }
}

// Função para calcular média e quantidade de compras
function calcularDados(indiceCliente) {
  let soma = 0;
  let qtd = 0;

  for (let j = 0; j < 3; j++) {
    if (compras[indiceCliente][j] > 0) {
      soma += compras[indiceCliente][j];
      qtd++;
    }
  }

  let media = qtd > 0 ? soma / qtd : 0;

  return {
    soma: soma,
    media: media,
    quantidade: qtd
  };
}

// Menu de opções
let opcao = parseInt(prompt("Digite 1 para ver compras de um cliente\nDigite 2 para ver compras de todos os clientes"));

if (opcao === 1) {
  let nomeBusca = prompt("Digite o nome do cliente que deseja consultar:");
  let indice = clientes.indexOf(nomeBusca);

  if (indice !== -1) {
    let dados = calcularDados(indice);
    console.log("Cliente: " + clientes[indice]);
    console.log("Compras: " + compras[indice]);
    console.log("Quantidade de compras: " + dados.quantidade);
    console.log("Média das compras: R$ " + dados.media.toFixed(2));
  } else {
    console.log("Cliente não encontrado!");
  }
} else if (opcao === 2) {
  console.log("Tabela de todos os clientes:");
  for (let i = 0; i < 3; i++) {
    let dados = calcularDados(i);
    console.log("Cliente: " + clientes[i]);
    console.log("Compras: " + compras[i]);
    console.log("Quantidade: " + dados.quantidade + " | Média: R$ " + dados.media.toFixed(2));
    console.log("--------------------------");
  }
} else {
  console.log("Opção inválida!");
}

function vetor() {
    let array = [];
  
    for (let i = 0; i < 10; i++) {
      array[i] = parseInt(prompt("Digite o " + (i + 1) + "º valor desejado:"));
    }
  
    let pesquisavalor = parseInt(prompt("Digite um valor inteiro para buscar no vetor:"));
  
    let posicao = []; //assim ele percorre todas posições encontradas
  
    for (let i = 0; i <10; i++) {
      if (array[i] === pesquisavalor) {
        posicao.push(i);
        
      }
    }
  
    if (posicao.length>0) {
      alert("Valor encontrado na posição: " + posicao.join(", "));
    } else {
      alert("Valor não encontrado no vetor.");
    }
  
    return false;
  
  }
  
  
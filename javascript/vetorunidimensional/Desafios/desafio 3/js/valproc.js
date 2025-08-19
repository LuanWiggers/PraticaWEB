function vetor() {

    let vetor = [];
    
    for (let i = 0; i < 5; i++) {
      let valor = parseInt(prompt("Digite o valor inteiro para a posição " + i + ":"));
      vetor.push(valor);
    }
    
    let numeroquemultiplica = parseInt(prompt("Digite o valor inteiro para multiplicar o elemento:"));
    
    let resultadomultiplicacao = [];
    
    for (let i = 0; i < vetor.length; i++) {
      resultadomultiplicacao.push(vetor[i] * numeroquemultiplica);
    }
    
    console.log("Resultados da multiplicação:");
    for (let i = 0; i < resultadomultiplicacao.length; i++) {
      console.log("Posição " + i + ": " + resultadomultiplicacao[i]);
    }
    
    }
    
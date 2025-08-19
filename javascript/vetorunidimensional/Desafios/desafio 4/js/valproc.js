function vetor(){
 
    let numerosinteiro = [];
    
    for (let i = 0; i < 4; i++) {
        let valor = parseInt(prompt("Digite um número inteiro: "));
        numerosinteiro.push(valor); 
    }
    
    console.log("Números em ordem inversa:");
    for (let i = numerosinteiro.length - 1; i >= 0; i--) {
        console.log(numerosinteiro[i]);
    }
    
    return false;
    
    }
    
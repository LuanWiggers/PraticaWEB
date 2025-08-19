function vetor (){
    let numeros=[];


    for(let i=0; i<10; i++){
        let valor = parseFloat(prompt("Digite um número"));
        numeros.push(valor);
    }
    console.log("Números na posições ímpares:");

    for(let i=0; i< numeros.length; i++){
        if(i%2 !==0){
            console.log("A posição é"+i+"e o número é "+numeros[i])
        }
    }
}
function vetor(){

    let i;
    let notas=[];
    contador=0;

    for(i=0; i<3; i++){
        notas[i]=parseInt(prompt("Insira as notas"));
    }
    console.log("As notas iguais ou superiores a 7,5 são:");

    for(i=0; i<3; i++){

        if(notas[i]>=7.5){
            contador++
            console.log(notas[i]);
            
        }
        
    }console.log("A quantidade foi: "+contador)
}
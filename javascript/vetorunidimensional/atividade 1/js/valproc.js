function vetor(){

    let i;
    let notas=[];
    

    for(i=0; i<5; i++){
        notas[i]=parseInt(prompt("Digite as notas:"));
    }
    console.log("As notas iguais ou superiores a 7.5 são:");
    for(i=0; i<5; i++){

        if(notas[i]>=7.5){
            console.log(notas[i]);
        }
    }
    return false;
}
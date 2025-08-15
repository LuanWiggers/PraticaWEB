function vetor(){
let i;
let num=[];



for(i=0; i<10; i++){
    num[i]=parseInt(prompt("Insira um número: "));
}
for(i=0; i<10; i++){
    quadrado=num[i]*num[i]
    console.log("O quadrado da posição "+i+" é "+quadrado)
}




}
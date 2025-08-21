function valproc(){

    let matriz=[];
    let linhas=3;
    let colunas=3;

//Alimentação da matriz

for(i=0; i<linhas; i++){

    matriz[i]=[]
    for(c=0; c<colunas; c++){
        matriz[i][c]=parseInt(prompt("Insira o valor da linha"+i+"e coluna "+c));

    }
}
//Impressão dados da matriz

for(i=0; i<linhas; i++){
for(c=0; c<colunas; i++){
    document.write(matriz[i][c]);

    }
    document.write("<br>");
}
return false;

}
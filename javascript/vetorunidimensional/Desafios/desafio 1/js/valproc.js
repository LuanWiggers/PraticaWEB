function vetor (){
    let notas=[];
    let notas2=[];
    let media=[];
   
    

  for(let i=0; i<5; i++){
    notas[i]=parseFloat(prompt("Insira sua "+(i+1)+"ª nota do 1º bimestre:"))
  }
  for(let i=0; i<5; i++){
    notas2[i]=parseFloat(prompt("Insira a sua "+(i+1)+"ª nota do 2º bimestre: "))
  }
  for(let i=0; i<5; i++){
    let m=(notas[i]+notas2[i])/2
    media.push(m);
  }
  for(let i=0; i<5; i++){
    console.log("A média do aluno "+(i+1)+" é "+media[i])
  }
}
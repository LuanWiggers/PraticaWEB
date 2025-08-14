function procDados() {
    let soma=0
    let v1=0
    let v2=0
    console.clear()

    v1=parseInt(prompt("Digite o primeiro valor"+inptval1))
    v2=parseInt(prompt("Digite o segundo valor"+inptval2))
    r=parseInt(prompt("Digite a soma"+inptresul))

    soma=v1+v2
   

   while(r!=soma){

    alert("Insira os valores novamente")
    r=parseInt(prompt("Digite a soma"+inptresul))
}return false;
}
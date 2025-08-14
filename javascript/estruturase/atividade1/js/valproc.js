function procFormulario(){
    //alert("Estou na função");
    if(document.frmnotas.txtnum1.value==""){

        alert("Preencha o campo Nota 1");
        document.frmnotas.txtnum1.focus();
        return false; 
    }else if(document.frmnotas.txtnum2.value==""){

        alert("Preencha o campo Nota 2");
        document.frmnotas.txtnum2.focus();
        return false;
    }else if(document.frmnotas.txtnum3.value==""){

        alert("Preencha o campo Nota 3");
        document.frmnotas.txtnum3.focus();
        return false;
    }else{

            //Processamento do programa...
            let nota1 = parseFloat(document.getElementById('num1').value);
            let nota2 = parseFloat(document.getElementById('num2').value);
            let nota3 = parseFloat(document.getElementById('num3').value);
            let=media=(nota1+nota2+nota3)/3;
            if(media>=7){

                alert("Sua média foi "+media.toFixed(2)+" Você foi aprovado");
            }else if(media<7){
                alert("Sua media foi "+media.toFixed(2)+" Você foi reprovado")
            }else if(nota1>nota2){
                alert("Número da nota 1 é maior que número da nota 2")
            }
    }   
}
function calcularIMC() {
    console.clear();
    let continuar = true;

    while (continuar) {
        let peso = parseFloat(prompt("Digite seu peso (em kg):"));
        let altura = parseFloat(prompt("Digite sua altura (em metros):"));
        

        let imc = peso / (altura * altura);

        alert("Seu IMC é: " + imc.toFixed(2));
        console.log("IMC calculado: " + imc.toFixed(2));

        let resposta = prompt("Deseja calcular novamente? (s para sim / qualquer outra tecla para sair)");

        if (resposta.toLowerCase() !== 's') {
            continuar = false;
            alert("Programa encerrado.");
        }
    }
}

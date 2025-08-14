function procDados() {
    console.clear();

    // Solicita os dois valores
    let v1 = parseInt(prompt("Digite o primeiro valor:"));
    let v2 = parseInt(prompt("Digite o segundo valor:"));

    // Calcula a soma
    let soma = v1 + v2;

    // Pergunta ao usuário o resultado da soma
    let r = parseInt(prompt("Digite a soma:"));

    // Enquanto a resposta estiver errada, continua pedindo
    while (r != soma) {
        alert("Tente novamente.");
        r = parseInt(prompt("Digite a soma:"));
    }

    // Quando acerta
    alert("Resultado correto!");
    console.log("Resultado correto!");

    return false;
}

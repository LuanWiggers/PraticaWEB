function mediaSalario() {
  let somaSalario = 0;
  let somaIdade = 0;
  let totalPessoas = 0;

  let somaSalarioFem = 0;
  let totalFem = 0;

  let somaSalarioMasc = 0;
  let totalMasc = 0;

  while (true) {
    let comando = prompt('Digite "Finalizar" para encerrar ou qualquer outra coisa para continuar');
    if (comando === "Finalizar") {
      break;
    }
    
    let idade = prompt("Digite a idade:");
    idade = Number(idade);
    if (idade <= 0 || isNaN(idade)) {
      alert("Idade inválida!");
      continue;
    }
    
    let genero = prompt('Digite o gênero (Feminino ou Masculino):');
    genero = genero.toLowerCase();
    if (genero !== "feminino" && genero !== "masculino") {
      alert("Gênero inválido!");
      continue;
    }
    
    let salario = prompt("Digite o salário:");
    salario = Number(salario);
    if (salario < 0 || isNaN(salario)) {
      alert("Salário inválido!");
      continue;
    }
    
    somaSalario = somaSalario + salario;
    somaIdade = somaIdade + idade;
    totalPessoas = totalPessoas + 1;
    
    if (genero === "feminino") {
      somaSalarioFem = somaSalarioFem + salario;
      totalFem = totalFem + 1;
    }
    
    if (genero === "masculino") {
      somaSalarioMasc = somaSalarioMasc + salario;
      totalMasc = totalMasc + 1;
    }
  }

  if (totalPessoas === 0) {
    alert("Nenhuma pessoa cadastrada.");
  } else {
    let mediaSalario = somaSalario / totalPessoas;
    let mediaIdade = somaIdade / totalPessoas;
    let mediaSalarioFem = totalFem > 0 ? somaSalarioFem / totalFem : 0;
    let mediaSalarioMasc = totalMasc > 0 ? somaSalarioMasc / totalMasc : 0;
    
    alert(
      "Média de salário do grupo: R$ " + mediaSalario.toFixed(2) + "\n" +
      "Média de idade do grupo: " + mediaIdade.toFixed(1) + "\n" +
      "Média de salário feminino: R$ " + mediaSalarioFem.toFixed(2) + "\n" +
      "Média de salário masculino: R$ " + mediaSalarioMasc.toFixed(2)
    );
  }
}

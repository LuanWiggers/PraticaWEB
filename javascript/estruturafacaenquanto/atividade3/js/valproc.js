document.getElementById("formNotas").addEventListener("submit", function(event) {
  event.preventDefault();

  let todasNotas = document.querySelectorAll(".nota");
  let resultados = [0, 0, 0, 0, 0];
  let somaTotal = 0;
  let totalAlunos = 0;

  for (let i = 0; i < 5; i++) {
    let aprovados = 0;
    for (let j = 0; j < 5; j++) {
      let index = i * 5 + j;
      let nota = parseFloat(todasNotas[index].value);
      if (!isNaN(nota)) {
        if (nota >= 7) {
          aprovados++;
        }
        somaTotal += nota;
        totalAlunos++;
      }
    }
    resultados[i] = aprovados;
  }

  // Mostrar os resultados
  for (let i = 0; i < 5; i++) {
    document.getElementById("resultado" + (i + 1)).textContent = 
      "Turma " + (i + 1) + ": " + resultados[i] + " alunos com média ≥ 7";
  }

  let media = (somaTotal / totalAlunos).toFixed(2);
  document.getElementById("mediaGeral").textContent = "Média geral da escola: " + media;
});

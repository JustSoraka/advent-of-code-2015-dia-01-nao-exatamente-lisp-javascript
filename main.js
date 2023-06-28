const ACOES_INSTRUCAO = {
  "(": 1,  // Incrementa o andar em 1
  ")": -1  // Decrementa o andar em 1
};

function calcularAndar(instrucoes) {
  /*
   * Calcula o andar final com base nas instruções dadas.
   * Um parêntese de abertura '(' indica subir um andar.
   * Um parêntese de fechamento ')' indica descer um andar.
   */
  let andarAtual = 0;
  for (let instrucao of instrucoes) {
    andarAtual += ACOES_INSTRUCAO[instrucao] || 0;
  }
  return andarAtual;
}

function imprimirResultado(instrucoes, andarFinal) {
  console.log(`Instruções: ${instrucoes}`);
  console.log(`Andar resultante: ${andarFinal}`);
  console.log();
}

// Lista de instruções
const listaInstrucoes = [
  "(())",
  "()()",
  "((((",
  "(()(()(",
  "))(((((",
  "())",
  "))(",
  ")))",
  ")())())"
];

// Imprimir os resultados diretamente em um loop
for (let instrucoes of listaInstrucoes) {
  let andarFinal = calcularAndar(instrucoes);
  imprimirResultado(instrucoes, andarFinal);
}

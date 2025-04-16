// Importa o módulo 'fs' (File System) para trabalhar com arquivos no Node.js.
const fs = require("fs");

// Lê o arquivo 'peticoes.json' de forma assíncrona.
// 'utf8' especifica a codificação do arquivo como UTF-8.
// A função de callback (err, data) é executada após a leitura do arquivo.
fs.readFile("peticoes.json", "utf8", (err, data) => {
  // Verifica se ocorreu algum erro durante a leitura do arquivo.
  if (err) {
    // Exibe o erro no console.
    console.error("Erro ao ler o arquivo:", err);
    // Encerra a execução da função.
    return;
  }

  // Bloco 'try...catch' para lidar com possíveis erros durante o processamento do JSON.
  try {
    // Converte o conteúdo do arquivo (string) para um objeto JavaScript usando JSON.parse().
    const peticoes = JSON.parse(data);

    // Filtra o array 'peticoes' para manter apenas as petições cujo 'valorCausa' é maior que 10000.
    const peticoesFiltradas = peticoes.filter(
      (peticao) => peticao.valorCausa > 10000
    );

    // Exibe um cabeçalho no console.
    console.log("Processos com valor da causa acima de R$10.000:");

    // Itera sobre o array 'peticoesFiltradas' e exibe o número do processo e o valor da causa de cada petição.
    peticoesFiltradas.forEach((peticao) => {
      console.log(`- ${peticao.numero}: R$${peticao.valorCausa}`);
    });
  } catch (error) {
    // Exibe o erro no console caso ocorra algum problema ao processar o JSON.
    console.error("Erro ao processar o JSON:", error);
  }
});

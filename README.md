# **👩🏻‍⚖️ Filtrando Petições Trabalhistas com Node.js.**

## **🎯 Objetivo do Projeto**
🤓 Este projeto tem como objetivo demonstrar o uso do **Node.js** para leitura de arquivos, **manipulação de dados JSON** e filtragem de informações em um contexto prático: petições trabalhistas.



## **✨ Funções/Conceitos Utilizados no Projeto.**


| Função/Conceito | Descrição Detalhada |
|---|---|
| `require("fs")` | Importa o módulo nativo `fs` (File System) do Node.js. Este módulo fornece funcionalidades para interagir com o sistema de arquivos, como ler e escrever arquivos. |
| `fs.readFile("peticoes.json", "utf8", (err, data) => { ... })` | Lê o arquivo `peticoes.json` de forma assíncrona. `utf8` especifica a codificação do arquivo. `(err, data) => { ... }` é a função de callback que será executada após a leitura. |
| `JSON.parse(data)` | Converte a string `data` (conteúdo do arquivo) em um objeto JavaScript. |
| `peticoes.filter((peticao) => peticao.valorCausa > 10000)` | Filtra o array `peticoes` usando o método `filter()`. Cria um novo array `peticoesFiltradas` com petições cujo `valorCausa` é maior que 10000. |
| `peticoesFiltradas.forEach((peticao) => { ... })` | Itera sobre o array `peticoesFiltradas` usando o método `forEach()`. Para cada petição, executa a função de callback. |
| `console.log(...)` | Exibe mensagens no console. |
| `console.error(...)` | Exibe mensagens de erro no console. |
| `try...catch` | Bloco `try` executa o código que pode gerar erros. Bloco `catch` lida com os erros que ocorrem dentro do `try`. |


##  **👩🏻‍💻Tecnologias Utilizados.**


|  **Tecnologia/Conceito** |  **Como foi estudada / aplicada** |  **Como usamos no projeto na prática** |
|-------------------|-------------------|--------------------------------------|
| **Node.js** | Ambiente de execução JavaScript do lado do servidor. | Executamos o script `filtrarPeticoes.js` para ler e manipular dados de um arquivo JSON. |
| **Módulo `fs` (File System)** | Permite interagir com o sistema de arquivos. | Usamos `fs.readFile()` para ler o arquivo `peticoes.json`. |
| **JSON** | Formato de dados leve e fácil de ler/escrever. | Usamos `JSON.parse()` para converter o conteúdo do arquivo em um objeto JavaScript. |
| **Método `.filter()` (JavaScript)** | Cria um novo array com os elementos que passam em um teste fornecido. | Filtramos as petições para selecionar apenas aquelas com valor da causa acima de R$10.000. |
| **Método `.forEach()` (JavaScript)** | Executa uma função para cada elemento do array. | Iteramos sobre as petições filtradas para exibir os dados no console. |
| **`try...catch` (JavaScript)** | Lida com erros durante a execução de um bloco de código. | Usamos para lidar com erros ao processar o JSON. |




## **🚀 Como Executar**

**1️⃣ Pré-requisitos:**

- Node.js instalado na sua máquina.

* NPM (Node Package Manager) instalado (geralmente instalado com o Node.js).

**2️⃣ Clonar o repositório (opcional).**

```
git clone <URL_do_repositório>
cd <nome_do_repositório>

```



**3️⃣ Instalar dependências.**

```
npm init -y
```



**4️⃣ Executar o script.**

```
node filtrarPeticoes.js
```




Feito com 💙 por Ayumi Muraki

// ---------------------Desafio 1--------------------------- //
// Soma dos Números de 1 a 10

let soma = 0;
for (let i = 1; i <= 10; i++) {
  soma += i;
}
console.log("A soma dos números de 1 a 10 é: " + soma);



// ---------------------Desafio 2--------------------------- //
// Imprimir Propriedades de uma Pessoa

const pessoa = {
    nome: "Jaiminho",
    idade: 73,
    cidade: "Tangamandapio"
  };
  
  for (let prop in pessoa) {
    console.log(`${prop}: ${pessoa[prop]}`);
  }



// ---------------------Desafio 3--------------------------- //
// Imprimir Nomes de Frutas

const frutas = [
    "Maçã", 
    "Banana", 
    "Morango", 
    "Abacaxi", 
    "Uva",
];

for (let fruta of frutas) {
  console.log(fruta);
}



// ---------------------Desafio 4--------------------------- //
// Tabuada do Número Escolhido

const numeroEscolhido = Number(prompt('Digite o número escolhido para a tabuada: '));

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${numeroEscolhido} = ${numeroEscolhido * i}`);
}



// ---------------------Desafio 5--------------------------- //
// Soma de Valores Numéricos em um Objeto

const numeros = {
    valor1: 3,
    valor2: 6,
    valor3: 9
  };
  
  let somaValores = 0;
  
  for (const prop in numeros) {
    somaValores += numeros[prop];
  }
  
  console.log("A soma dos valores é: " + somaValores);



// ---------------------Desafio 6--------------------------- //
// Mecanismo de Busca em um Array

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroBuscado = Number(prompt('Busque um número (1 a 10): '));;

for (let i = 0; i < arrayNumeros.length; i++) {
  if (arrayNumeros[i] === numeroBuscado) {
    console.log(`Achei o número ${numeroBuscado} na posição ${i}`);
    break;
  }
}



// ---------------------Desafio 7--------------------------- //
// Sequência Fibonacci

let n = Number(prompt('Digite o tamanho da sequência: '));
let sequencia = [1, 1];

for (let i = 2; i < n; i++) {
  sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
}

console.log(sequencia.slice(0, n));



// ---------------------Desafio 8--------------------------- //
// Quantas vogais?

const palavra = prompt("Insira uma palavra: ").toLowerCase();
let contagemVogais = 0;

for (let i = 0; i < palavra.length; i++) {
  const letra = palavra[i];
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    contagemVogais++;
  }
}

console.log(`A palavra "${palavra}" contém ${contagemVogais} vogais.`);



// ---------------------Desafio 9--------------------------- //
// Ordenação de Array

const arrayDesordenado = [2, 7, 3, 1, 5, 9, 4, 6, 5];

for (let i = 0; i < arrayDesordenado.length - 1; i++) {
  for (let j = 0; j < arrayDesordenado.length - 1 - i; j++) {
    if (arrayDesordenado[j] > arrayDesordenado[j + 1]) {
      let temp = arrayDesordenado[j];
      arrayDesordenado[j] = arrayDesordenado[j + 1];
      arrayDesordenado[j + 1] = temp;
    }
  }
}

console.log("Array ordenado: ", arrayDesordenado);



// ---------------------Desafio 10--------------------------- //
// Rolagem de Dados

const quantidadeDados = Number(prompt("Quantidade de dados: "));
const quantidadeLados = Number(prompt("Quantidade de lados por dado: "));
const quantidadeTentativas = Number(prompt("Quantidade de tentativas: "));

if (
  isNaN(quantidadeDados) || isNaN(quantidadeLados) || isNaN(quantidadeTentativas) ||
  quantidadeDados <= 0 || quantidadeLados <= 0 || quantidadeTentativas <= 0
) {
  console.log("Por favor, insira números válidos maiores que zero.");
} else {
  for (let i = 0; i < quantidadeTentativas; i++) {
    let soma = 0;
    let rolagens = [];

    for (let j = 0; j < quantidadeDados; j++) {
      const resultadoDado = Math.floor(Math.random() * quantidadeLados) + 1;
      rolagens.push(resultadoDado);
      soma += resultadoDado;
    }
    
    console.log(`Tentativa ${i + 1}: Rolagens individuais: ${rolagens.join(', ')}`);
    console.log(`Soma total: ${soma}\n`);
  }
}
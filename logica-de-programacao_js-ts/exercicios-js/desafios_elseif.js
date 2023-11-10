// ----------------------Desafio 1-------------------------- //
// Verificação de Números Pares e Ímpares (If e Ternário)

const numero = Number(prompt("Digite um número: "));

const parOuImpar = (numero % 2 === 0) ? 'É par' : 'É ímpar';
console.log('Ternario | ' + parOuImpar);

if (numero % 2 === 0) {
    console.log("É par");
} else {
    console.log("É ímpar");
}



// ----------------------Desafio 2-------------------------- //
// Verificação de Nota

const nota = Number(prompt("Digite a nota: "))

if (nota >= 90) {
    console.log("Aprovado");
} else if (nota >= 70) {
    console.log("Aprovado com mérito");
}
else {
    console.log("Reprovado");
}



// ---------------------Desafio 3--------------------------- //
// Determinação do Maior Número (If e Ternário)

const primeiroNumero = Number(prompt("Digite o primeiro número: "))
const segundoNumero = Number(prompt("Digite o segundo número: "))
const terceiroNumero = Number(prompt("Digite o terceiro número: "))

const maior_numero_ternario = (primeiroNumero > segundoNumero) ? 
(primeiroNumero > terceiroNumero ? primeiroNumero : terceiroNumero) : 
(segundoNumero > terceiroNumero ? segundoNumero : terceiroNumero);
console.log("Ternário | O maior número é: " + maior_numero_ternario);


let maior_numero;

if (primeiroNumero > segundoNumero) {
    if (primeiroNumero > terceiroNumero) {
        (maior_numero = primeiroNumero);
    } else {
        maior_numero = terceiroNumero;
    }
} else if (segundoNumero > terceiroNumero) {
    maior_numero = segundoNumero;
} else {
    maior_numero = terceiroNumero;
}

console.log("O maior número é: " + maior_numero);



// ---------------------Desafio 4--------------------------- //
// Verificação de Triângulo

const lado1 = Number(prompt("Comprimento do primeiro lado: "));
const lado2 = Number(prompt("Comprimento do segundo lado: "));
const lado3 = Number(prompt("Comprimento do terceiro lado: "));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Triângulo equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Triângulo isósceles");
} else {
    console.log("Triângulo escaleno");
}



// ---------------------Desafio 5--------------------------- //
// Verificação de Ano Bissexto

const ano = Number(prompt("Informe um ano: "));

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log("Ano bissexto");
} else {
    console.log("Não é um ano bissexto");
}



// ---------------------Desafio 6--------------------------- //
// Verificação de Idade para Compra de Bebida Alcoólica (If e Ternário)

const idade = Number(prompt("Digite a sua idade: "));

const podeBeber = (idade >= 18) ? "Você pode comprar bebidas alcoólicas." : 
"Você não pode comprar bebidas alcoólicas.";

console.log(podeBeber);


if (idade >= 18) {
  console.log("Você pode comprar bebidas alcoólicas.")
} else {
  console.log("Você não pode comprar bebidas alcoólicas.")
}
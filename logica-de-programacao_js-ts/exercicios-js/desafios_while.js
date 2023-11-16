// ----------------------Desafio 1-------------------------- //
// Contagem Regressiva

let contador = 10;
while (contador >= 1) {
    console.log(contador);
    contador--;
}



// ----------------------Desafio 2-------------------------- //
//  Números Primos

let numero = Number(prompt("Insira um número: "));
let ehPrimo = true;
let divisor = 2;

while (numero > divisor) {
    if (numero % divisor === 0) {
        ehPrimo = false;
        break;
    }
    divisor++;
}

(ehPrimo && numero > 1) ?
    console.log(`${numero} é um número primo.`) :
    console.log(`${numero} não é um número primo.`);




// ----------------------Desafio 3-------------------------- //
// Soma de Números Pares e Ímpares


let somaPares = 0;
let somaImpares = 0;

while (true) {
    let numero = Number(prompt("Digite um número inteiro (0 para encerrar):"));
    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        continue;
    }

    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0) {
        somaPares += numero;
    } else {
        somaImpares += numero;
    }
}
console.log(`A soma dos números pares inseridos é: ${somaPares}`);
console.log(`A soma dos números ímpares inseridos é: ${somaImpares}`);
console.log(`A soma total dos números é: ${somaImpares + somaPares}`);




// ----------------------Desafio 4-------------------------- //
// Advinhe o Número

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

while (true) {
    let tentativa = Number(prompt("Adivinhe o número (entre 1 e 100):"));
    if (tentativa === numeroSecreto) {
        console.log("Parabéns! Você acertou.");
        break;
    } else if (numeroSecreto > tentativa) {
        console.log("Tente um número maior.");
    } else {
        console.log("Tente um número menor.");
    }
}




// ----------------------Desafio 4-------------------------- //
// Jogo de Advinhação com Limite

const numeroSecreto2 = Math.floor(Math.random() * 100) + 1;
const tentativasMaximas = 5;
let tentativas = 0;

while (tentativasMaximas > tentativas) {
    let tentativa = Number(prompt("Adivinhe o número (entre 1 e 100):"));
    tentativas++;

    if (tentativa === numeroSecreto2) {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
        break;
    } else if (numeroSecreto2 > tentativa) {
        console.log("Tente um número maior.");
    } else {
        console.log("Tente um número menor.");
    }
}

if (tentativas === tentativasMaximas) {
    console.log(`Suas ${tentativasMaximas} tentativas acabaram. O número correto era ${numeroSecreto2}.`);
}
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
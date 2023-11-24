// ---------------------Teste de Lógica 1--------------------------- //
// Somas Mínima e Máxima

function minMaxSomas(arr) {
    arr.sort((a, b) => a - b);

    const somaMinima = arr.slice(0, 4).reduce((acc, num) => acc + num, 0);

    const somaMaxima = arr.slice(1).reduce((acc, num) => acc + num, 0);

    return [somaMinima, somaMaxima];
}

const arr = [];
for (let i = 0; i < 5; i++) {
    const valor = parseInt(prompt(`Digite o valor ${i + 1}:`));
    arr.push(valor);
}

console.log(`Array inserido: [${arr.join(', ')}]`);

const resultados = minMaxSomas(arr);
console.log(`A soma minima é: ${arr[0]} + ${arr[1]} + ${arr[2]} + ${arr[3]} = ${resultados[0]}`);
console.log(`A soma maxima é: ${arr[1]} + ${arr[2]} + ${arr[3]} + ${arr[4]} = ${resultados[1]}`);




// ---------------------Teste de Lógica 2--------------------------- //
// Escada

function imprimirEscada(tamanho) {
    let escada = '\n';

    for (let i = 1; i <= tamanho; i++) {
        const espacos = ' '.repeat(tamanho - i);
        const cerquilhas = '#'.repeat(i);
        escada += espacos + cerquilhas + '\n';
    }

    console.log(escada);
}

const tamanhoEscada = parseInt(prompt("Digite o tamanho da escada:"));

if (tamanhoEscada >= 1) {
    imprimirEscada(tamanhoEscada);
} else {
    console.log("Por favor, insira um tamanho válido (maior ou igual a 1).");
}
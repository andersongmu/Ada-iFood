// ---------------------Desafio 1--------------------------- //
// Rolagem de Dados

function obterNumeroValido(mensagem) {
    let numero;
    do {
        numero = Number(prompt(mensagem));
        if (isNaN(numero) || numero <= 0) {
            console.log("Por favor, insira um número válido maior que zero.");
        }
    } while (isNaN(numero) || numero <= 0);

    return numero;
}

function rolarDado(quantidadeLados) {
    return Math.floor(Math.random() * quantidadeLados) + 1;
}

function realizarTentativa(quantidadeDados, quantidadeLados) {
    let soma = 0;
    let rolagens = [];

    for (let j = 0; j < quantidadeDados; j++) {
        const resultadoDado = rolarDado(quantidadeLados);
        rolagens.push(resultadoDado);
        soma += resultadoDado;
    }

    return { rolagens, soma };
}

function executarJogo() {
    const quantidadeDados = obterNumeroValido("Quantidade de dados: ");
    const quantidadeLados = obterNumeroValido("Quantidade de lados por dado: ");
    const quantidadeTentativas = obterNumeroValido("Quantidade de tentativas: ");

    for (let i = 0; i < quantidadeTentativas; i++) {
        const { rolagens, soma } = realizarTentativa(quantidadeDados, quantidadeLados);

        console.log(`Tentativa ${i + 1}: Rolagens individuais: ${rolagens.join(', ')}`);
        console.log(`Soma total: ${soma}`);
    }
}

executarJogo();



// ---------------------Desafio 2--------------------------- //
// Operações Matemáticas

function calcularOperacao() {
    let operador = prompt(
        "Digite o operador:\n" +
        "Adição (+)\n" +
        "Subtração (-)\n" +
        "Multiplicação (*)\n" +
        "Divisão (/)"
    );
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        return "Erro: Números inválidos";
    }

    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
            break;
        default:
            return "Operador inválido";
    }

    return `${num1} ${operador} ${num2} = ${resultado}`;
}

let resultado = calcularOperacao();
console.log(resultado);




// ---------------------Desafio 3--------------------------- //
// Aplicação Bancária

let saldo = 0;

function depositar(valor) {
    saldo += valor;
    alert(`Depósito de ${valor} realizado. Novo saldo: ${saldo}`);
}

function sacar(valor) {
    if (valor <= saldo) {
        saldo -= valor;
        alert(`Saque de ${valor} realizado. Novo saldo: ${saldo}`);
    } else {
        alert("Saldo insuficiente");
    }
}

function consultarSaldo() {
    return `Saldo atual: ${saldo}`;
}

function mostrarOpcoes() {
    alert(
        "Escolha a operação:\n" +
        "1 - Depósito\n" +
        "2 - Saque\n" +
        "3 - Consultar Saldo"
    );
}

mostrarOpcoes();

while (true) {
    let opcao = Number(prompt("Digite o número da operação desejada (ou clique em Cancelar para sair):"));

    if (opcao === null) {
        console.log(consultarSaldo());
        break;
    } else if (opcao === '1') {
        let valorDeposito = parseFloat(prompt("Digite o valor a ser depositado: "));
        depositar(valorDeposito);
        mostrarOpcoes();
    } else if (opcao === '2') {
        let valorSaque = parseFloat(prompt("Digite o valor a ser sacado: "));
        sacar(valorSaque);
        mostrarOpcoes();
    } else if (opcao === '3') {
        alert(consultarSaldo());
        mostrarOpcoes();
    } else {
        alert("Opção inválida. Tente novamente.");
        mostrarOpcoes();
    }
}



// ---------------------Desafio 4--------------------------- //
// Jogo da Velha

const tabuleiro = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const entradaJogador = (num) => {
    try {
        const numValido = typeof num === 'number' && (num === 0 || num === 1);

        if (!numValido) {
            throw new Error("Erro interno. O parâmetro deve ser numérico.");
        }

        const suaVez = "Sua vez, Jogador 1: ";

        const instrucao = num === 0
            ? "Escolha uma casa para jogar (de 1 a 9)."
            : "O Computador está pensando...";

        const escolha = num === 0 ? prompt(`${instrucao}\n${suaVez}`) : Math.floor(Math.random() * 9) + 1;

        return escolha;
    } catch (error) {
        alert(`Erro: ${error.message}`);
        return null;
    }
};

const posicoesTabuleiro = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
};

const fazerJogada = (jogador, escolha) => {
    try {
        escolha = Number(escolha);

        if (isNaN(escolha) || escolha < 1 || escolha > 9) {
            throw new Error("Escolha inválida. Escolha um número de 1 a 9.");
        }

        const [linha, coluna] = posicoesTabuleiro[escolha];

        if (tabuleiro[linha][coluna] !== null) {
            if (jogador === 0) {
                throw new Error("Essa casa já foi escolhida");
            }
            return null; // Ignora a jogada do computador se a casa já estiver ocupada
        }

        tabuleiro[linha][coluna] = jogador === 0 ? 'X' : 'O';

        const jogadorAtual = jogador === 0 ? "Jogador 1" : "Computador";

        const mensagem = `${jogadorAtual} escolheu a casa ${escolha}\n\n${exibirTabuleiro()}`;

        alert(mensagem);

        return mensagem;
    } catch (error) {
        alert(`Erro: ${error.message}`);
        return null;
    }
};

const exibirTabuleiro = () => {
    let tabuleiroStr = '';
    for (let i = 0; i < 3; i++) {
        tabuleiroStr += tabuleiro[i].join(' | ');
        if (i < 2) {
            tabuleiroStr += '\n---------\n';
        }
    }
    return tabuleiroStr;
};

const verificarVencedor = () => {
    const linhas = [
        [tabuleiro[0][0], tabuleiro[0][1], tabuleiro[0][2]],
        [tabuleiro[1][0], tabuleiro[1][1], tabuleiro[1][2]],
        [tabuleiro[2][0], tabuleiro[2][1], tabuleiro[2][2]],
        [tabuleiro[0][0], tabuleiro[1][0], tabuleiro[2][0]],
        [tabuleiro[0][1], tabuleiro[1][1], tabuleiro[2][1]],
        [tabuleiro[0][2], tabuleiro[1][2], tabuleiro[2][2]],
        [tabuleiro[0][0], tabuleiro[1][1], tabuleiro[2][2]],
        [tabuleiro[0][2], tabuleiro[1][1], tabuleiro[2][0]],
    ];

    for (const linha of linhas) {
        if (linha.every((elem) => elem === 'X')) {
            return 'Jogador 1 venceu!';
        } else if (linha.every((elem) => elem === 'O')) {
            return 'Computador venceu!';
        }
    }

    return null;
};

const instrucoesJogo = () => {
    alert("Bem-vindo ao Jogo da Velha!\n\nPara fazer sua jogada, escolha uma casa de 1 a 9.");
};

const jogoDaVelha = () => {
    instrucoesJogo();
    let num = 0;

    while (num < 9) {
        const vezDoJogador = entradaJogador(num % 2);

        if (vezDoJogador === null) {
            continue; // Ignora entrada inválida
        }

        const jogadaAtual = fazerJogada(num % 2, vezDoJogador);

        if (jogadaAtual === null) {
            continue; // Ignora jogada inválida do computador
        }

        const vencedor = verificarVencedor();
        if (vencedor) {
            alert(vencedor);
            break;
        }

        num++;
    }

    if (num === 9) {
        alert("Empate!");
    }
};

jogoDaVelha();
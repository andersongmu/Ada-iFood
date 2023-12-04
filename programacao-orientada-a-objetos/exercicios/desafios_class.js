// Desafio 1 - Operações Matemáticas
class MathUtils {
    static sum(a, b) {
        return a + b;
    }

    static sub(a, b) {
        return a - b;
    }

    static mul(a, b) {
        return a * b;
    }

    static div(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            throw new Error("Não é possível dividir por zero");
        }
    }
}

console.log(MathUtils.sum(5, 3));  // Saída: 8
console.log(MathUtils.sub(5, 3));  // Saída: 2
console.log(MathUtils.mul(5, 3));  // Saída: 15
console.log(MathUtils.div(6, 3));  // Saída: 2



// Desafio 2 - Círculo
class Circulo {
    static calcularArea(raio) {
        return 3.14 * raio ** 2;
    }

    static calcularCircunferencia(raio) {
        return 2 * 3.14 * raio;
    }
}

console.log(Circulo.calcularArea(5));  // Saída: 78.5
console.log(Circulo.calcularCircunferencia(5));  // Saída: 31.4



// Desafio 3 - Operações Bancárias
class Conta {
    constructor(numeroConta, nomeTitular, saldo) {
        this._numeroConta = numeroConta;
        this._nomeTitular = nomeTitular;
        this._saldo = saldo;
    }

    depositar(valor) {
        this._saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this._saldo}`);
    }

    sacar(valor) {
        if (this.validarSaldo(valor)) {
            this._saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado. Novo saldo: R$ ${this._saldo}`);
        } else {
            console.log("Saldo insuficiente. Saque não permitido.");
        }
    }

    validarSaldo(valor) {
        return this._saldo >= valor;
    }
}

const conta = new Conta(123, "João", 1000);
conta.depositar(500);  // Saída: Depósito de R$ 500 realizado. Novo saldo: R$



// Desafio 4 - Figuras geométricas

class FiguraGeometrica {
    calcularArea() {
        throw new Error("Método calcularArea() deve ser implementado nas classes filhas.");
    }
}

class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }
}

const circulo = new Circulo(5);
console.log("Área do círculo:", circulo.calcularArea());

const quadrado = new Quadrado(4);
console.log("Área do quadrado:", quadrado.calcularArea());



// Desafio 5 - Animais

class Animal {
    constructor(nome, idade, especie) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }

    imprimirDados() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Espécie: ${this.especie}`);
    }

    emitirSom() {
        console.log("Som do animal");
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, especie, tamanho) {
        super(nome, idade, especie);
        this.tamanho = tamanho;
    }

    emitirSom() {
        console.log("Au Au!");
    }
}

class Gato extends Animal {
    constructor(nome, idade, especie, cor) {
        super(nome, idade, especie);
        this.cor = cor;
    }

    emitirSom() {
        console.log("Miau!");
    }
}

const cachorro = new Cachorro("Bob", 10, "Cachorro", "Grande");
cachorro.imprimirDados();
cachorro.emitirSom();

const gato = new Gato("Naomi", 4, "Gato", "Branco");
gato.imprimirDados();
gato.emitirSom();
// ---------------------Desafio 7--------------------------- //
// Verificação de Números Pares e Ímpares

const numero = Number(prompt("Digite um número: "));

switch (numero % 2) {
    case 0:
        console.log("É par");
        break;
    default:
        console.log("É ímpar");
        break;
}



// ---------------------Desafio 8--------------------------- //
// Conversão de Notas em Conceitos

const letra = prompt("Digite uma letra: ").toLowerCase();

switch (letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("É uma vogal");
        break;
    default:
        console.log("É uma consoante");
        break;
}



// ---------------------Desafio 9--------------------------- //
// Determinação de Estação do Ano

const mes = prompt("Digite o nome de um mês: ").toLowerCase();

switch (mes) {
  case 'dezembro':
  case 'janeiro':
  case 'fevereiro':
    console.log("Inverno");
    break;
  case 'março':
  case 'abril':
  case 'maio':
    console.log("Primavera");
    break;
  case 'junho':
  case 'julho':
  case 'agosto':
    console.log("Verão");
    break;
  case 'setembro':
  case 'outubro':
  case 'novembro':
    console.log("Outono");
    break;
  default:
    console.log("Mês não reconhecido");
    break;
}
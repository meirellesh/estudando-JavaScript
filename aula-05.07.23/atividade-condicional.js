// Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.

let num1 = 16;
let num2 = -14;
let num3 = 0;

if (num3 > 0) {
    console.log("O número " + num3 + " é maior que zero");
} else if (num3 < 0) {
    console.log("O número " + num3 + " é menor que zero");
} else {
    console.log("O número é " + num3);
}

// Crie um programa que solicite a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.

var idade1 = 18;
let idade2 = 12;

if (idade1 >= 18) {
    console.log("A idade é " + idade1 + " , portanto é maior de idade!");
} else {
    console.log("A idade é " + idade1 + " , portanto é menor de idade!");
}

// Escreva um programa que receba dois números e determine qual deles é o maior.

let numero1 = 2;
let numero2 = 5;

if (numero1 > numero2) {
    console.log("O maior número é o primeiro. Seu valor é: " + numero1);
} else {
    console.log("O maior número é o segundo. Seu valor é: " + numero2);
}

// Crie um programa que receba dois números e verifique se ele é par ou ímpar.

let n1 = 6;
let n2 = 13;

if (n1 % 2 == 0) {
    console.log("O numero " + n1 + " é par!");
} else {
    console.log("O número " + n1 + " é impar!");
}

// Escreva um programa que solicite o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.

let diaNome = "Safsdfaa";

if (diaNome == "Segunda") {
    console.log(diaNome + " é um dia útil!");
} else if (diaNome == "Terça") {
    console.log(diaNome + " é um dia útil!");
} else if (diaNome == "Quarta") {
    console.log(diaNome + " é um dia útil!");
} else if (diaNome == "Quinta") {
    console.log(diaNome + " é um dia útil!");
} else if (diaNome == "Sexta") {
    console.log(diaNome + " é um dia útil!");
} else if (diaNome == "Sabado") {
    console.log(diaNome + " é um dia de fim de semana");
} else if (diaNome == "Domingo") {
    console.log(diaNome + " é um dia de fim de semana");
} else {
    console.log(diaNome + "isso não é um dia da semana!");
}

// Faça um programa que solicite um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).

let dia2 = 5;

switch (dia2) {
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda");
        break;

    case 3:
        console.log("Terça");
        break;

    case 4:
        console.log("Quarta");
        break;

    case 5:
        console.log("Quinta");
        break;

    case 6:
        console.log("Sexta");
        break;

    case 7:
        console.log("Sabado");
        break;
}

// Crie um programa que solicite uma temperatura em Celsius e a converta para Fahrenheit, exibindo o resultado com duas casas decimais

let tempC = 35;
let tempF;

tempF = tempC * 1.8 + 32;
console.log(tempF.toFixed(2));

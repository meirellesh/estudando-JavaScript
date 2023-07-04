
//Escreva um programa que verifique se um número é par ou ímpar.
let num1 = 4;
let num2 = 9;
let ePar = num2 % 2;
let condicao = ePar == 0;
let mensagem;

mensagem = condicao ? "Par" : " é Impar"; // condicao
console.log("O numero " + num1 + mensagem);

//Faça um programa que calcule a média aritmética de três números.
let num3 = 4;
let num4 = 5;
let num5 = 6;

let media3 = (num3 + num4 + num5)/3;

console.log("a Média é: " + media3);

//Escreva um programa que determine se um número é divisível por 3 e por 5 ao mesmo tempo.
let num6 = 9;
let num7 = 15;
let num8 = 10;

let divisao3e5 = ((num8 % 3 == 0) && (num8 % 5 == 0));
console.log(divisao3e5);

//Faça um programa que calcule a área de um triângulo com base e altura.
// base x altura / 2
let base = 2;
let altura = 2;

let area = (base*altura)/2;

console.log("Area é: " + area);

//Escreva um programa que converta uma temperatura de graus Celsius para Fahrenheit.
//TC/5 = (TF – 32)/9
let temperaturaC = 35;
let temperaturaF = temperaturaC* 1.8 + 32;
console.log("Temperatura em F: " + temperaturaF);

//Faça um programa que calcule o delta das funções de segundo grau.
let a = 2;
let b = 1;
let c = -3;

let delta = b**2 - (4*a*c);
console.log("O delta é: " + delta);

//Faça um programa que retorna se uma determinada pessoa pode dirigir, baseado na sua idade (utilize operador ternário).
let idade = 16;
let habilitado = true;
let condicaoDirigir = ((idade>=18) && (habilitado == true));

let mensagemDirigir;

mensagemDirigir = condicaoDirigir ? "Pode dirigir" : "Nao pode dirigir";

console.log(mensagemDirigir);









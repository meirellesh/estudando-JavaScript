// // //Escreva um programa que imprima os números de 1 a 20 usando um loop for.
// console.log("Ex1");
//let i = 0;
// for (i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// // // //Escreva um programa que exiba os números de Fibonacci até o décimo termo. Os números de Fibonacci são formados pela sequência 0, 1, 1, 2, 3, 5, 8, 13, ... em que cada número é a soma dos dois anteriores. Use um loop while para gerar a sequência.
// //FEITO
// console.log("---------------------------");
// console.log("Ex2");
// // dois primeiros termos da sequencia de fibonacci. Esses termos ignoram a soma
// let p = 0;
// let u = 1;
// let i = 0;
// //while com condição de quantas somas serão feitas
// while (i < 10) {
//     //mostra o termo do loop
//     console.log(p);
//     //variavel e soma dos ultimos 2 termos
//     let soma = p + u;
//     //passagem de n para n1 e n1 para n2
//         p = u;
//     u = soma;
//     i++;
// }

// //Crie um programa que receba um número e calcule a soma de todos os números ímpares até esse número. Use um loop for e uma estrutura condicional if para verificar se cada número é ímpar.
//FEITO
// let soma = 0;
// console.log("---------------------------");
// console.log("Ex3");
// for (i = 0; i <= 5; i++) {
//     if (!(i % 2 == 0)) {
//         soma += i;
//     }

// }
// console.log(soma);

// // //Faça um programa que receba um número e exiba a tabuada da soma desse número usando um loop for.
// //FEITO
// console.log("---------------------------");
// console.log("Ex4");
// let base = 2;
// for(i = 0; i < 10; i++){
//     let soma = base + i;
//     console.log(soma);
// }

// // //Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.
// //FEITO
// console.log("---------------------------");
// console.log("Ex5");
// for(i = 1; i<100; i++){
//     if(i % 7 == 0){
//         console.log(i);
//     }
// }
// // //Escreva um programa que receba um número e desenhe na tela um triângulo formado por "*".
// //FEITO
// console.log("---------------------------");
// console.log("Ex6");
// let linha ="";
// for(i = 0; i < 7; i++){     
//     linha += "* "
//     console.log(linha)
//     }

//Desenhar um quadrado com @ , mas seu interior deve ser oco;

let lado = 5;
let linha = "";
for(let y = 1; y <= lado; y++){
    linha = "";
    for (let x = 1; x <= lado; x++){
    if(y == 1 || y == lado || x == 1 || x == lado){
        linha += "@ "
    } else{
        linha += "  ";
    }   
}
console.log(linha);
}

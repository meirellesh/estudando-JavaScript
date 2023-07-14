// Crie uma função que receba um vetor de números e retorne a soma de todos os elementos.
let vetor1 = [2, 4, 9];
let soma = 0;

function somar() {
    for (let i = 0; i <= vetor1.length - 1; i++) {
        soma += vetor1[i];
    }
    console.log(soma);
}
somar();

// // Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.

let vetorPalavra = ["banido", "desbanido"];

function juntaString() {
    console.log(vetorPalavra.join());
}

juntaString();

// //Crie uma função que receba um vetor de números e retorne o maior valor presente no vetor.
let maior = 0;
function retornaMaior() {
    for (let i = 0; i <= vetor1.length - 1; i++) {
        if (vetor1[i] > maior) {
            maior = vetor1[i];

        }

    }
    console.log(maior);
}

retornaMaior();

//Crie uma função que receba um vetor de números e retorne a média dos elementos.

function media() {
    for (let i = 0; i <= vetor1.length - 1; i++) {
        soma += vetor1[i];
    }
    console.log("Total soma " +  soma);
    console.log("Tamanho vetor " + vetor1.length);
    let divisao = soma / vetor1.length;
    console.log("Resultado " + divisao);
}
media();

//Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.

console.log(vetor1.map(num => (num ** 2)));

//Dado um array de palavras, utilize o método filter para retornar um novo array contendo apenas as palavras que começam com a letra 'A'.

let vetorPalavra2 = ["animal", "cachorro", "gato", "abelha", "coelho"];

console.log(vetorPalavra2.filter(char => (char[0] == "a")));

//Dado um array de números, utilize o método forEach para imprimir no console cada número multiplicado por 3.

vetor1.forEach(num => console.log(num * 3));

//Dado um array de números, utilize o método includes para verificar se o número 10 está presente no array.

console.log(vetor1.includes(10));

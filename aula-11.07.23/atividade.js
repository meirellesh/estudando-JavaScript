// Escreva um programa que receba um texto e calcule a quantidade de letra de "a". O programa deve considerar maisculas e minusculas.

let texto = "animal";

let numerosdeA = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) == "A" || texto.charAt(i) == "a") {
        numerosdeA++;
    }
}
console.log(texto + " tem " + numerosdeA + " 'A's");

// Escreva um programa que calcule a raiz quadrada de um número e mostre na tela.

let valor1 = 36;

function calculaRaiz() {
    let raiz = Math.sqrt(valor1);
    console.log("A raiz é: " + raiz);
}
calculaRaiz();

// Escreva um programa que  arredonde um número para o inteiro mais próximo.

let valor2 = 2.77;

let Arrendondado = Math.round(valor2);
console.log("O valor mais inteiro mais próximo é: " + Arrendondado);

// Escreva um programa que  calcule o valor absoluto de um número.
let valor3 = -4;

let valorAbsoluto = Math.abs(valor3);
console.log("O valor absoluto é: " + valorAbsoluto);

// Escreva um programa que  gere um número aleatório entre 10 e 20.

let valor4 = Math.round(Math.random() * 10 + 10);
console.log("O valor aleatório é:" + valor4);

// Arredonde um número para um número específico de casas decimais.

let valor5 = 2.9345682348291;

valor3Casas = valor5.toFixed(3);
console.log("O valor arrendodado para 3 casas é: " + valor3Casas);

// Escreva um programa que  converta uma string para um número decimal e arredonde para o número inteiro anterior.
let numero = "29.5";

let converte = Math.floor(Number.parseFloat(numero));

console.log(
    "O valor arredondado para o inteiro anterior em forma de texto é: " +
        converte
);

// Verifique se um número é um valor finito, não infinito, NaN ou não.
let numeroTeste = 50;

if (isNaN(numeroTeste)) {
    console.log(numeroTeste + " Não é um número!");
} else {    
    if (isFinite(numeroTeste)) {
        console.log(numeroTeste + " é finito!");
    } else {
        console.log(numeroTeste + " é infinito");
    }
}

// Arredonde um número para um número específico de casas decimais.

let valor7 = 2.9345682348291;

valor3Casas = valor5.toFixed(3);
console.log("O valor arrendodado para 3 casas é: " + valor3Casas);

// Escreva um programa que verifique se a string "ba" contém em outras outra string.
let stringBase = " Barba ";
let busca = "Ba";
console.log(stringBase.toLowerCase().includes(busca.toLowerCase()));

// Escreva um programa que  converte uma string para letras maiúsculas e para letras minúsculas e mostre na tela.

let String1 = "Henrique";

let stringMaiscula = String1.toUpperCase();
let stringMinuscula = String1.toLowerCase();

console.log("String em letras maiúsculas: " + stringMaiscula);
console.log("String em letras minusculas: " + stringMinuscula);

// Extraia uma parte específica de uma string com base em índices.

console.log("String com indice de 0 a 4: " + stringBase.substring(0, 4));

// Substitua todas as ocorrências de uma substring por outra em uma string.

console.log(stringBase.replaceAll("a", "e"));

// Remova espaços em branco extras no início e no final e no final de uma string
console.log(stringBase.trim());

// Inverta uma string. Uitilize o laço for.

let textoInvertido = "";

for(let i = texto.length-1; i>=0; i--){
    textoInvertido += texto.charAt(i);
}
console.log(textoInvertido);


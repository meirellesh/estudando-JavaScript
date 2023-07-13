// //Funções que recebem parametros

// function soma(n1,n2){
//     console.log("Numero 1 é: " + n1);
//     console.log("Numero 2 é: " + n2);
//     console.log(n1 + n2);
// }

// soma(10,6);


// //Funções que não recebem parametros

// let n3 = 7;
// let n4 = 9;

// function somar(){
//     console.log("Numero 3 é: " + n3);
//     console.log("Numero 4 é: " + n4);
//     console.log(n3 + n4);

// }
// somar();

// //Funções que retornam valores
// //Funções que não retornam valores



//Entrada
//Processamento
//Saida

function desenhaTriangulo(altura){
    for(let i = 0; i < altura; i++){
        let linha = "";
        for(let j = 0; j < altura-i; j++){
            linha += " ";

        }
        for(let j = 0; j < i; j++){
            linha += "* ";
        }
        console.log(linha);
    }
}

desenhaTriangulo(10);


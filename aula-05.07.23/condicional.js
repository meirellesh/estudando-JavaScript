// Estruturas Condicionais

// const altura = 1.60;
// if(altura >= 1.60){
//     console.log("Entrou no brinquedo");
// } else {
//     console.log("Não pode entrar!");
// }

let nivelIngles = 8; //1,2,3,4,5

// if(nivelIngles == 1){
//     console.log("Nivel Iniciante");
// } else if(nivelIngles == 2){
//     console.log("Nivel Basico")
// } else if(nivelIngles == 3){
//     console.log("Nivel Intermediário")
// } else if(nivelIngles == 4){
//     console.log("Nivel Avançado")
// } else if(nivelIngles == 5){
//     console.log("Nivel Fluente");
// } else{
//     console.log("Corrija o nível, está fora dos parametros!")
// }

// let saldo = 250;
// let conseguiuFazerCompra;

// if (saldo > 200){
//     console.log("Fez a compra do Tenis")
//     conseguiuFazerCompra = true;
// } else {
//     console.log("Sem saldo!");
//     conseguiuFazerCompra = false;
// }

// if(conseguiuFazerCompra){
//     console.log("Conseguiu fazer a compra!");
// }

// let num1 = 3; num2 = 0; num3 = 3;

// if(num1 > num2 && num1 > num3){
//     if(num2 > num3){
//         console.log(num1 + " > " + num2 + " > " + num3);
//     } else {
//         console.log(num1 + " > " + num3 + " > " + num2)
//     }
// } else if(num2 > num1 && num2 > num3){
//     if(num1 > num3){
//         console.log(num2 + " > " + num1 + " > " + num3);
//     } else {
//         console.log(num2+ " > " + num3 + " > " + num1)
//     }
// } else if (num3 > num2 && num3 > num1){
//     if(num1 > num2){
//         console.log(num3 + " > " + num1 + " > " + num2);
//     } else {
//         console.log(num3 + " > " + num2 + " > " + num1)
//     }
// } else{
//     console.log("Há numeros iguais!");
// }

// let idade = 18; //1 variavel
// let habilitado = true;  // 2 variavel

// if(idade >=18){ //primeira condição a ser atingida
//     if(habilitado == true){ //se primeira condiçao seja atingida, inicia essa condição
//         console.log("Voce pode dirigir!");
//     }
//     else {
//         console.log("Tire sua habilitação para poder dirigir!");
//     }
// } else{ //caso a primeira condição não seja atingida
//     console.log("Você nao tem idade suficiente para dirigir!");
// }
let mes = 6;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
}

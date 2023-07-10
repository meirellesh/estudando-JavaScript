/*
//Quantidade definida de repetições
for(inicializaçao; condição; incrementação){
//     //Repetição
// }
// //Quantidade Indeterminada de repetições
//     while(condicao){
//         //repetição 
//     }
// */ 
// let i = 0;
// let lado = 7;
// let j = 0;

// //Quadrado
// for(i = 0;  i < lado; i++){
//     //cria e troca a linha cada vez que for chamado
//     let linha = "";
//     for(j = 0; j < lado; j++){ 
//         //coloca os valores da linha completa       
//         linha+="# "
//     }   
//     console.log(linha); 
// }

// //Triangulo

// let linha = "";
// console.log("--------------------------------")
// for(i = 0;  i < lado; i++){    
//     linha +="# " 
//     console.log(linha);     
// }
// console.log("--------------------------------")
// for(let i = 0; i < lado; i++){
//     //Monta a linha
//     linha+="# ";
// }
// for(let i = 0; i < lado; i++){
//     //Repete a linha n vezes
//     console.log(linha)
// }
// console.log("--------------------------------")
// //break e continue
// for(let i = 1; i <= 20; i++){
//     if(!(i % 2 == 0)){
//         // ignora e pula pro proximo loop
//         continue;
//     }
//     console.log(i)
// }
for(let i = 1; i <= 100; i++){
    if((i % 8 == 0) && (i != 8)){
        console.log(i);
        //para completamente o loop for
        break;
    }
}
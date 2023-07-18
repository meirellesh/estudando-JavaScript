//window.document -> Objeto que representa o documento HTML
//document.getElementById(); -> Busca pelo id do elemento
//document.getElementsByClassName() -> Busca todos os elementos por classe
//document.getElementsByTagName() -> Busca todos os elementos por tag2


//window.document.getElementById();
let titulo = document.getElementById("titulo");
//console.log(titulo);

let paragrafo = document.getElementsByClassName("paragrafo");
//console.log(paragrafo);

let negritos = document.getElementsByTagName("b");
//console.log(negritos);

let campoEmail = document.querySelector("input[type=email]")
//console.log(campoEmail);

let negritoParagrafo = document.querySelector("p b");
//console.log(negritoParagrafo);

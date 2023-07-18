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

let negritosParagrafo = document.querySelectorAll("p b"); // é muito aplicado hoje

// titulo.align = "right";
// titulo.title = "Titulo Principal";
// titulo.style.color = "cyan";
// titulo.style.fontSize = "100px";
// let paragrafos = document.querySelector("p");
// paragrafo.innerHTML = "Hoje na aula de <b>JavaScript</b> conversamos sobre DOM. Entendi muita coisa. Da para criar muitas ideias."
// console.log(paragrafo.innerText); // conteudo textual do elemento
// console.log(paragrafo.innerHTML); // conteudo textual + html do elemento


// uso de classe com JavaScript
let caixa = document.querySelector('#informe')
caixa.classList.add("erro"); //adiciona uma nova classe
caixa.classList.remove("mensagem"); //remove uma classe
caixa.classList.toggle("atencao"); //adiciona se nao existe ou remove se existir
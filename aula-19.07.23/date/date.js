//Date -> Data é o objeto que facilita o uso de data com JavaScript

let data = new Date();
console.log(data.toLocaleDateString());
console.log(data.toLocaleTimeString());

let agora = Date.now();
console.log(agora);

console.log(new Date(1));

const btn = document.querySelector("#enviar");

btn.addEventListener("click", ()=>{
    const dataCampo = document.querySelector("#dataNasc")
    const valor = dataCampo.value;
    const data = new Date(valor);
    console.log(data);
})
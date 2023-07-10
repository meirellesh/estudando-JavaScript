// Tipagem Estatica -> Definição de um tipo a cada variavel(Java,C, C++, TypeScript)
// Tipagem Dinamica -> Definção da variavel é definido por seu valor (JavaScript, Phyton)
// typeof -> Operador retorna o TIPO da variavel;

let variavel = 22;
console.log(typeof variavel); //number
variavel = "Prof. Gabriel"; 
console.log(typeof variavel); //string
variavel = true;
console.log(typeof variavel); //boolean

variavel = {nome: "Gabriel", idade: 21} //object
console.log(typeof variavel);

variavel = [2,4,5,6,8];
console.log(typeof variavel); //object - vetor

variavel = function(){ return 1};
console.log(typeof variavel); //function

variavel = undefined; //indefinido
console.log(variavel); //undefined

variavel = null; //vazio ou nulo
console.log(variavel);

variavel = NaN; //Not a Number
console.log(variavel);


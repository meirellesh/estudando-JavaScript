class Pessoa {
    nome;
    idade;
    nota;
}
let aluno = new Pessoa();
aluno.nome = "Nicolas";
aluno.idade = 18;
aluno.nota = 10;

let aluno2 = new Pessoa();
aluno2.nome = "Luiza";
aluno2.idade = 23;
aluno2.nota = 7;

let aluno3 = new Pessoa();
aluno3.nome = "Henrique";
aluno3.idade = 27;
aluno3.nota = 9;
let vetor = [aluno, aluno2, aluno3];


function addText(){
    document.getElementById('nome1').innerHTML = aluno.nome;
    document.getElementById('nome2').innerHTML = aluno2.nome;
    document.getElementById('nome3').innerHTML = aluno3.nome;

    document.getElementById('idade1').innerHTML = aluno.idade;
    document.getElementById('idade2').innerHTML = aluno2.idade;
    document.getElementById('idade3').innerHTML = aluno3.idade;

    document.getElementById('nota1').innerHTML = aluno.nota;
    document.getElementById('nota2').innerHTML = aluno2.nota;
    document.getElementById('nota3').innerHTML = aluno3.nota;

}
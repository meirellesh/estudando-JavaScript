const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const btnEscolha = document.querySelector("#btnEscolha");
const home = document.getElementById("home");
const quiz = document.getElementById("quiz");

import questions from "./questions.js";
import { start } from "./cron.js";
import { stop } from "./cron.js";
import { timer } from "./cron.js";


let currentIndex = 0;
let questionsCorrect = 0;

home.hidden = false;

btnEscolha.onclick = () =>{
    home.hidden = true;
    quiz.hidden = false;
    currentIndex = 0;
    questionsCorrect = 0;    
    loadQuestion();
    start();
}




btnRestart.onclick = () => {
    // Exibir a seção home e ocultar a seção quiz
    home.hidden = false;
    quiz.hidden = true;

    // Limpar as respostas selecionadas
    document.querySelectorAll(".answer.selected").forEach((item) => {
        item.classList.remove("selected");
    });

    // Redefinir o índice da pergunta atual e o contador de respostas corretas
    currentIndex = 0;
    questionsCorrect = 0;

    // Carregar a primeira pergunta e reiniciar o cronômetro
    loadQuestion();
    stop();
    start();
};


function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}

function finish() {
    textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
    ${answer.option}
    </button>
    `;

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}

loadQuestion();




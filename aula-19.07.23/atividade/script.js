let semaforoCompleto = ["imagens/vermelho.png","imagens/amarelo.png", "imagens/verde.png" ];
let imagem = document.getElementById("semaforo");
let indiceAtual = 1;
let intervaloAuto ="";


function semaforo(){
    imagem.src = semaforoCompleto[indiceAtual];
    if(indiceAtual == (semaforoCompleto.length-1)){
        indiceAtual = 0;
    }
    else{
        indiceAtual++;
    }
}

function automatico(){
    clearInterval(intervaloAuto)
    intervaloAuto = setInterval(semaforo, 1000); 
}



function vermelho(){       
    imagem.src = semaforoCompleto[0]
    clearInterval(intervaloAuto); 
}

function amarelo(){       
    imagem.src = semaforoCompleto[1]
    clearInterval(intervaloAuto); 
}

function verde(){       
    imagem.src = semaforoCompleto[2]
    clearInterval(intervaloAuto); 
}
// Mude a cor da tela para azul e depois para vermelho a cada dois segundos
function changeClass() {
    document.body.classList.toggle('color');
}

setInterval(changeClass, 2000);


// Crie um cronometro utilizando o setInterval
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('click', resetarTempo);


let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++
    }, 100);
    iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
}
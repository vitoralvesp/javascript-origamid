function handleKeyboard(event) {
    if (event.key === 'a') {
        document.body.classList.toggle('azul'); // add background-color
    }
}

window.addEventListener('keydown', handleKeyboard);




/* 
Quando o usuário clicar nas linhas internas do site,
adicione a classe 'ativo' ao item clicado e remova dos
demais itens caso eles possuam a mesma. 
*/
const internLinks = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    internLinks.forEach((link) => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
}

internLinks.forEach((link) => {
    link.addEventListener('click', handleLink);
});


// Duplique o menu e adicione ele em copyright
const menu = document.querySelector('.menu');
const copyright = document.querySelector('.copy')
const clone = menu.cloneNode(true);
copyright.appendChild(clone);



// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const dt = faq.querySelector('dt');  

// Selecione o DD referente ao primeiro dt 
const nextDt = dt.nextElementSibling;

// Substitua o conteúdo de Faq pelo de animais
const animals = document.querySelector('.animais');
faq.innerHTML = animals.innerHTML;


console.log(animals);




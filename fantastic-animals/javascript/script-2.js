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

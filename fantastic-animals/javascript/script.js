// Retorne no console todas as imagens do site
const images = document.querySelectorAll('img');
//console.log(images);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const string = document.querySelectorAll('img[src^="img/imagem"]');
//console.log(string);

// Selecione os links internos, onde o href começa com #
const internLinks = document.querySelectorAll('[href^="#"]');
//console.log(internLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Element = document.querySelectorAll('.animais-descricao h2');
//console.log(h2Element);

// Selecione o último p do site
const paragraphElement = document.querySelectorAll('p');
//console.log(paragraphElement[paragraphElement.length - 1]);


// Mostre o texto dos parágrafos no console
paragraphElement.forEach((element) => console.log(element));

// Mostre o texto dos parágrafos
paragraphElement.forEach((element) => console.log(element.innerHTML));


// Adicione a classe 'ativo' a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach((menu) => {
    menu.classList.add('ativo');
})

// Remove a classe 'ativo' a todos os itens do menu, menos o primeiro
menu.forEach((menu) => {
    menu.classList.remove('ativo');
})

menu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
images.forEach((image) => {
    const attribute = image.hasAttribute('alt');
    //console.log(img. attribute);
})

// Modifique o link interno
const link = document.querySelector('a[href^="http"');
link.setAttribute('href',  'www.google.com');

// Verifique a distância da primeira img em relação ao topo da página
const whereIsImage = document.querySelector('img');
const isOnTop = whereIsImage.offsetTop;
console.log(isOnTop);
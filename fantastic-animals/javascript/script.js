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
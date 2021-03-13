const comida = 'Pizza'; // return a string
const agua = new String('Água'); // return a object

const frase = 'A melhor comida';
frase[frase.length - 1]; // return a


frase.charAt(0); // return A 
frase.charAt(frase.length - 1); // return a

const linguagem = 'JavaScript'; 
const phrase = 'Estou estudando ';

const fraseFinal = phrase.concat(linguagem, '!!');


const fruta = 'Banana';
const listaDeFrutas = 'Melancia, Banana, Laranja, Maçã';

listaDeFrutas.includes(fruta); // return true
fruta.slice(0,3); // return Ban
fruta.slice(0, -1); // return Banan


//let listaDeItens = ['Camisa Calça Blusa Meias Tênis'];
//listaDeItens = listaDeItens.replace(/[ ]+/g, ', '); // return Camisa, Calça, Blusa, Meias, Tênis



const html = "<div> O melhor código em HTML5 </div>";
const htmlArray = html.split('div');

console.log(htmlArray);

const newHTML = htmlArray.join('h1');
console.log(newHTML);

document.body.innerHTML = newHTML; // add in html body
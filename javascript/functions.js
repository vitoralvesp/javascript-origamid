const perimetro = new Function('lado', 'return lado * 4'); 

function somar(n1, n2) {
    return n1 + n2;
}

somar.length; // total de parâmetros
somar.name; // nome da função
somar.call(); // chama a função


function decricaoCarro() {
    console.log(this.nome + ' ' + this.nome);
}

descricaoCarro.call({marca: 'Honda', ano: 2015}); // return Honda 2015
  
 
const frutas = ['Banana', 'Uva', 'Pera'];

frutas.forEach().call(frutas, (item) => {
    console.log(item);
});


function Dom(selector) {
    this.element = document.querySelector(selector);
}

const ul = new Dom('ul'); //  
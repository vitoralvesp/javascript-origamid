const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

// Remova o primeiro valor de comidas e coloque em uma variável
const firstValue = comidas.shift();
console.log(firstValue); // return 'Pizza'


// Remova o último valor de comidas e coloque em uma variável
const lastValue = comidas.pop();
console.log(lastValue); // return 'Macarrão'


// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
console.log(comidas); // return ['Frango', 'Carne', 'Arroz']


// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas); // return ['Arroz', 'Frango', 'Carne', 'Peixe', 'Batata']



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

// Arrume os estudantes em ordem alfabética
const organizedStudents = estudantes.sort();
console.log(organizedStudents);


// Inverta a ordem dos estudantes
const reverseStudents = estudantes.reverse();
console.log(reverseStudents);


// Verifique se Joana faz parte dos estudantes
const joanaIncludes = estudantes.includes('Joana');
console.log(joanaIncludes); // return true


// Verifique se Juliana faz parte dos estudantes
const julianaIncludes = estudantes.includes('Juliana');
console.log(julianaIncludes); // return false


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section');
html = html.join('ul');

html = html.split('div');
html = html.join('li');

console.log(html);



const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const copy = carros.copyWithin(0); 
console.log(copy); // return ['Ford', 'Fiat', 'VW', 'Honda']

const removeElement = carros.pop();
console.log(removeElement); // return 'Honda'


// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
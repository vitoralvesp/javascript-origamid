const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

// Remova o primeiro valor de comidas e coloque em uma variável
const firstValue = comidas.shift();
console.log(firstValue); // return 'Pizza'


// Remova o último valor de comidas e coloque em uma variável
const lastValue = comidas.pop();
console.log(lastValue); // return 'Macarrão'


// Adicione 'Arroz' ao final da array
comidas.unshift('Arroz');
console.log(comidas); // return ['Arroz', 'Frango', 'Carne']


// Adicione 'Peixe' e 'Batata' ao início da array
comidas.push('Peixe', 'Batata');
console.log(comidas); // return ['Arroz', 'Frango', 'Carne', 'Peixe', 'Batata']



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

// Arrume os estudantes em ordem alfabética
const organizedStudents = estudantes.sort();
console.log(organizedStudents);


// Inverta a ordem dos estudantes
const disorganizedStudents = estudantes.reverse();
console.log(disorganizedStudents);


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
const removeSection = html.split('section');
const removeDiv = html.split('div');

// const addUlElement = html.join('ul');
// const addLiElement = html.join('li');


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const copy = carros.copyWithin(0); 
console.log(copy); // return ['Ford', 'Fiat', 'VW', 'Honda']

const removeElement = carros.pop();
console.log(removeElement); // return 'Honda'

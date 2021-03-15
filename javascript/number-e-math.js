Number.isNaN(NaN); // return true

Number.isInteger(20); // return true

Number.parseFloat('100 reais'); // return 100
Number.parseFloat('99.50'); // return 99.5

Number.parseInt('10.27 reais'); // return 10

const preço = 2.99;
preço.toFixed(); // return 3

preço.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // return $2.99
preço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // return R$2.99

Math.random() * 100 // retorna números de 0 até 100



// Retorne um número aleatório de 1050 a 2000
const number = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);


// Retorne o maior número da lista abaixo
const listNumbers = '4, 5, 20, 8, 9';
const arrayNumbers = listNumbers.split(', ');
const maxNumber = Math.max(...arrayNumbers); // return 20


// Crie uma função para limpar os preços e retornar a soma total
const listaPrecos = ['R$ 59,99', 'R$ 100,222', 'R$ 230  ', 'r$ 200'];

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace(',', '.').trim('R$', '');
    preco = preco.toFixed(2);
    return preco;
};

let soma = 0;
listaPrecos.forEach((preco) => {
    soma = soma + limparPreco(preco);
});


















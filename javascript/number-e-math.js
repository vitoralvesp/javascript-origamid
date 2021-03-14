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
// crie uma função construtora de pessoas
// 1. Deve conter nome, sobrenome e idade
// 2. Deve conter um método no protótipo que retorne o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
};

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerHTML; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String

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




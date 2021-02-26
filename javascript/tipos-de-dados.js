var nome = "Vitor";
var sobrenome = "Pereira";
var nomeCompleto = nome + " " + sobrenome;
var idade = 17;
var whatIsYourAge = "A idade de" + " " + nome + " " + "é" + " " + idade;
var cidade;
var symbol = Symbol();

// typeof
console.log(typeof nome);  // return string
console.log(typeof idade);  // return number
console.log(typeof cidade);  // return undefined
console.log(typeof symbol);  // return symbol


// Somando Strings
console.log(nomeCompleto);
console.log(whatIsYourAge);


// var whatIsYourAge = "A idade de" + " " + nome + " " + "é" + " " + idade;
var newAge = `A idade de ${nome} é ${idade}`;
console.log(newAge);


// Declare uma variável contendo uma string
var peakyBoss = "Thomas";
var familyBoss = "Shelby"

// Declare uma variável contendo um número dentro de uma string
var favoriteRazor = 1;

// Declare uma variável com a sua nome e sobrenome
var superBoss = `I'm ${peakyBoss + familyBoss}`;
console.log(superBoss);

// Coloque a seguinte frase em uma variável: It's time 
var frase = "It's time";

// Verifique o tipo da variável que contém o seu nome 
var onlyConferring = typeof peakyBoss;
console.log(onlyConferring);








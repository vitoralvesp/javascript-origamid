function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.80));


addEventListener('click', function() {
    // Função Callback
    alert('Eu estou aqui...');
});


function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(30));



// Crie uma função para verificar se um valor é Truthy
function verdadeiro(x) {
    return !!x;
}

// Perímetro de um quadrado
function quadrado(lado) {
    return lado * 4;
}

// Função que retorna o seu nome completo
function myName(firstName, middleName, lastName) {
    return `${firstName} ${middleName} ${lastName}`;
}

console.log(myName('Vitor', 'Alves', 'Pereira'));

// Função que verifica se um numero é par
function isEven(num) {
    var modulo = num % 2;
    if (modulo !== 0) {
        return true;
    } else {
        return false;
    }
}

// nome no console toda vez que der scroll
addEventListener('scroll', function() {
    console.log('Vitor Pereira');
})

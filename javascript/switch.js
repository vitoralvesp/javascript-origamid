var corFavorita = 'Azul';

switch (corFavorita) {
    default:
        console.log('Olhe para o céu')
        break;
    case 'Vermelho':
        console.log('Olhe para rosas');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol');
        break;
}


// Verifique se a sua idade é maior do que a de algum parente
var myAge = 17;
var hisAge = 24;

if ((myAge) > (hisAge)) {
    console.log('minha idade é maior.');
} else {
    console.log('a idade dele é maior.');
}

// Qual é o valor da expressão a seguir?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // return 3; 5 - ' ' --> 5; 


// verificar se as variáveis são truthy ou falsy
var myName = "Vitor";
var age = 17;
var hairColor = "black";
var glasses = true;
var dream;
var workout = 0;

console.log(!!myName, !!age, !!hairColor, !!glasses, !!dream, !!workout)

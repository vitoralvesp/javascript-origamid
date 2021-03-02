for (var num = 0; num <= 10; num++) {
    console.log(num);
}

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}


var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

for (var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
}



// Crie um array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brazilIsWinner = [1959, 1962, 1970, 1994, 2002];

// Interaja com o array utilizando um loop, para mostrar a seguinte 
// mensagem: "O Brasil ganhou a copa de"

for (i = 0; i < brazilIsWinner.length; i++) {
    console.log(`O Brasil ganhou a copa de ${brazilIsWinner[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];

for (fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta]);
    if (frutas[fruta] === 'Pera') {
        break;
    }
}

// Coloque a última fruta em uma variável
var lastFruit = frutas[frutas.length - 1];
console.log(lastFruit);
/*

1) Scrivi un programma che generi un numero da 1 a 6:

    a) sia per il giocatore;
    b) sia per il computer;

2) Il programma dovrà stabilire il vincitore in base a chi fa il punteggio più alto.

*/

//  Prendo un elemento dall'HTML per stilizzarlo

const container = document.querySelector('.container-fluid');
console.log('container', container, typeof container);

container.classList.add('bg-primary', 'vh-100', 'text-center');


// 1) - a) Scrivo un programma che generi un numero da 1 a 6 per il giocatore;

let dicePlayer = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log('dicePlayer', dicePlayer, typeof dicePlayer);


// 2) - b) Scrivo un programma che generi un numero da 1 a 6 per il computer;

let diceComputer = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log('diceComputer', diceComputer, typeof diceComputer);

// 2) Il programma dovrà stabilire il vincitore in base a chi fa il punteggio più alto.

if (dicePlayer > diceComputer) {
    console.log('Complimenti giocatore! Hai vinto');
} else {
    console.log('Fai schifo! Hai perso');
}


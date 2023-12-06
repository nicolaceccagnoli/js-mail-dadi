/*

1) Scrivi un programma che generi un numero da 1 a 6:

    a) sia per il giocatore;
    b) sia per il computer;

2) Il programma dovrà stabilire il vincitore in base a chi fa il punteggio più alto.

*/

//  Prendo un elemento dall'HTML per stilizzarlo

const container = document.querySelector('.container-fluid');
console.log('container', container, typeof container);

// Aggiungo dello stile al mio Container

container.classList.add('bg-primary', 'vh-100', 'd-flex', 'justify-content-center', 'align-items-center');

// Creo un elemento all'interno del Container

const card  = document.createElement('div');
console.log('card', card, typeof card);

container.append(card);

// Aggiungo dello stile alla mia Card

card.classList.add('card', 'rounded', 'bg-dark', 'text-center', 'text-danger');

// Prendo il Form dall'HTML e lo metto dentro la mia Card

const myForm = document.querySelector('form');
console.log('myForm', myForm, typeof myForm);

card.append(myForm);

// Prendo il Bottone dall'HTML e lo dichiaro in una variabile

const myButton = document.querySelector('button');
console.log('myButton', myButton, typeof myButton);

// Aggiungo dello stile al mio Bottone

myButton.classList.add('align-center', 'btn', 'btn-outline-warning');

// Faccio sì che al Click dell'utente sul Bottone il mio programma inizi a funzionare

myButton.addEventListener('click', function() {

    // 1) - a) Scrivo un programma che generi un numero da 1 a 6 per il giocatore;

let dicePlayer = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log('dicePlayer', dicePlayer, typeof dicePlayer);


// 2) - b) Scrivo un programma che generi un numero da 1 a 6 per il computer;

let diceComputer = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log('diceComputer', diceComputer, typeof diceComputer);

// 2) Il programma dovrà stabilire il vincitore in base a chi fa il punteggio più alto.

if (dicePlayer > diceComputer) {


    // Creo un elemento in HTML
    const victory = document.createElement('div');
    console.log('victory', victory, typeof victory);

    console.log('Complimenti giocatore! Hai vinto');

} else {

    console.log('Fai schifo! Hai perso');
}

})




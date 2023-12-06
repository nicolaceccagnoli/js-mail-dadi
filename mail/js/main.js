/*

    1) Chiedi all'utente la sua mail;
    2) Controlla che sia nella lista di chi può accedere;
    3) Stampa un messaggio appropriato sull'esito del controllo.

*/

// 1) Chiedi all' utente la sua mail: Fatto su HTML con un Input

// 2) Controlla che sia nella lista di chi può accedere;

    // Dichiaro una Variabile in cui inserisco l'input del Form

    const emailInput = document.getElementById('mail');
    // console.log('emailInput', emailInput, typeof emailInput);

    // Dichiaro una Variabile in cui inserisco il Bottone del Form

    const myButton = document.querySelector('button');
    // console.log('myButton', myButton, typeof myButton);

    //  Dichiaro un'array contenente le mail valide

    const emailValid = ['nicola@gmail.com', 'nicola@boolean.com', 'nicola@icloud.com'];

    myButton.addEventListener('click', function(){

        // Dichiaro una Variabile in cui inserisco il Valore dell'input dell'utente

        let userMail = (emailInput.value);

        if ( userMail == emailValid[0] || [1] || [2] ) {

            // Prendo un elemento dal DOM e lo inserisco in una variabile
            const accessApproved = document.getElementById('access-approved');


            console.log('agrande');

        } else {

            console.log('non entra');
        }

    })




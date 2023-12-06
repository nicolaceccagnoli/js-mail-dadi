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

        // Dichiaro una Variabile in cui inserisco il Valore della mail inserita dall'utente

        let userMail = (emailInput.value);

        // 2) Controlla che sia nella lista di chi può accedere;

         if ( userMail == emailValid[0] || [1] || [2] ) {

            // Prendo un elemento dal DOM e lo inserisco in una variabile
            const accessApproved = document.getElementById('access-approved');

            accessApproved.innerHTML = `

            <div class="row justify-content-center">

                <div class="col-auto">

                    <div class="card text-bg-light mb-3 text-center">
                        <div class="card-header">
                            Permesso di Entrare: 
                        </div>
                        <div class="card-body">
                        <h5 class="card-title text-success">
                            Concesso
                        </h5>
                        </div>
                    </div>

                </div>

            </div> 

            `;

            console.log('agrande');

        } else if ( userMail !== emailValid[0] || [1] || [2] )   {

            // Prendo un elemento dal DOM e lo inserisco in una variabile
            const accessDenied = document.getElementById('access-denied');

            accessDenied.innerHTML = `
            
            <div class="row justify-content-center">

                <div class="col-auto">

                    <div class="card text-bg-light mb-3 text-center">
                        <div class="card-header">
                            Permesso di Entrare: 
                        </div>
                        <div class="card-body">
                        <h5 class="card-title text-danger">
                            Non Concesso
                        </h5>
                        <p class='text-warning'> Non puoi entrare! </p>
                        </div>
                    </div>

                </div>

            </div>

            `;
            

            console.log('non entra');
        }

    })




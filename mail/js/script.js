/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

// verifiachiamo che lo script sia collegato all'html
console.log('Mail');

// Dichiariamo la costante 'submitDomElement' per utilizzarla successivamente nell' event listener
const submitDomElement = document.getElementById('submit');
//Dichiariamo la costante 'accessDomElement' per utilizzarla successivamente con innerHTML per stampare l'esito
const accessDomElement = document.getElementById('access');


//Dichiariamo un array di nomi che possono essere contenute nelle mail
let emails = ['pippo@gmail.com', 'tony@live.it', 'pancrazio.outlook.com', 'pasquale@yahoo.it', 'donato@virgilio.it', 'filippo@libero.it', 'giovanni@alice.com'];

//utilizziamo la costante'submitDomElement' per agganciare un event listener che prende il click
submitDomElement.addEventListener('click', function () {
    //dichiaro una variabile di controllo 'emailsInArray per verificare la presenza del valore
    let emailsInArray = false;
    // costruiamo un ciclo che scorra tutto l'array
    for (let i = 0; i < emails.length; i++) {
        //costuiamo una funzione che prenda il valore dal campo email del DOM e ce lo restituisca in console
        //dichiariamo la costante emailDomElement in modo che ci restituisca il valore
        const emailDomElement = document.getElementById('email').value;
        //console.log(emailDomElement);

        const email = emails[i];

       
        console.log(email);

        //impostiamo la condizione in modo che SE nella costante emailDomElement compare uno dei nomi cambia il valore della variabile di controllo
        if (emailDomElement === email) {

            emailsInArray = true;
        }



    }

    if (emailsInArray === true) {
        accessDomElement.innerHTML = `<span>Accesso garantito</span>`;

        console.log('accesso garantito');
    } else {
        accessDomElement.innerHTML = `<span>Accesso negato</span>`;
        console.log('accesso negato');
    }

}


)
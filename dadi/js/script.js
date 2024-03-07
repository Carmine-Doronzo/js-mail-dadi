/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

console.log('Gioco dei dadi')
const launchDomElement = document.getElementById('launch')

launchDomElement.addEventListener('click', function () {

    const resultsDomElement = document.getElementById('results');
    const humanDice = Math.floor(Math.random() * 6) + 1;
    console.log(humanDice);
    const pcDice = Math.floor(Math.random() * 6) + 1;
    console.log(pcDice);

    if (humanDice > pcDice) {
        console.log('hai vinto')
        resultsDomElement.innerHTML = `<div>il tuo dado ha riportato il valore: ${humanDice}</div>
                                  <div>il dado del computer ha riportato il valore: ${pcDice}</div>
                                  <div>HAI VINTO !!!</div>`


    }

    else if (humanDice === pcDice) {
        console.log('pareggio')
        resultsDomElement.innerHTML = `<div>il tuo dado ha riportato il valore: ${humanDice}</div>
                                  <div>il dado del computer ha riportato il valore: ${pcDice}</div>
                                  <div>PAREGGIO!!!</div>`

    }

    else {
        console.log('ha vinto il computer')
        resultsDomElement.innerHTML = `<div>il tuo dado ha riportato il valore: ${humanDice}</div>
                                  <div>il dado del computer ha riportato il valore: ${pcDice}</div>
                                  <div>HA VINTO IL COMPUTER!!!</div>`

    }
}
)
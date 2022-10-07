/*
Il numero di chilometri da percorrere
Età del passeggero 
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

const price = 0.21
let discount;
let btnTicket = document.getElementById('start');

//chidere nome e cognome
let userName
let nameBottom = document.querySelector('.name_bottom');

btnTicket.addEventListener('click',
    function () {
        userName = document.querySelector('.name_ticket').value;
        nameBottom.innerHTML = nameBottom.innerHTML + userName;

    }
)

//chiedere chilometri da percorrere
let kmRequest

btnTicket.addEventListener('click',
    function () {
        kmRequest = Number(document.querySelector('.km_ticket').value)
        console.log("chilometri", kmRequest);
    }
)

//chiedere età del passeggero
let userAge;

btnTicket.addEventListener('click',
    function () {
        userAge = document.getElementById('age').value
        console.log("fascia", userAge);
    }
)



//calcolo prezzo al chilometro
let ticketPrice

btnTicket.addEventListener('click',
    function () {
        ticketPrice = kmRequest * price;
        console.log('prezzo non scontato', ticketPrice);
    }
)

//calcolo delo sconto
btnTicket.addEventListener('click',
    function () {
        if (userAge == "minorenne") {
            discount = ticketPrice * 0.20;
            console.log("sconto", discount);
        } else if (userAge == 'over_65') {
            discount = ticketPrice * 0.40;
            console.log("sconto", discount);
        } else {
            discount = 0;
            console.log("sconto", discount);
        }
    }
)



//totale da pagare
let finalPrice = document.querySelector('.final_price');

btnTicket.addEventListener('click',
    function () {
        ticketPrice = ticketPrice - discount;
        finalPrice.innerHTML = ticketPrice
        console.log("Il totale da pagare è € ", ticketPrice);
    }
)

//inserimento tipo offerta nel biglietto
let discountType = document.querySelector('.discount_type');

btnTicket.addEventListener('click',
    function () {
        if (userAge == "minorenne") {
            discountType.innerHTML = 'Sconto Minorenne'
            console.log("cccc", discountType);
        } else if (userAge == 'over_65') {
            discountType.innerHTML = 'Sconto Over 65'
            console.log("sconto", discount);
        } else {
            discountType.innerHTML = 'Nessuno sconto'
            console.log("sconto", discount);
        }
    }
)

//assegnazione carrozza

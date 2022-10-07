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
let nameBottom = document.getElementById('name_bottom');

btnTicket.addEventListener('click',
function() {
        userName = document.getElementById('name_ticket').value;
        nameBottom.innerHTML = nameBottom.innerHTML + userName;

    }
)

//chiedere chilometri da percorrere
let kmRequest 

btnTicket.addEventListener('click',
    function() {
        kmRequest = Number(document.getElementById('km_ticket').value)
        console.log("chilometri", kmRequest);
    }
)

//chiedere età del passeggero
let userAge;

btnTicket.addEventListener('click',
    function() {
        userAge = document.getElementById('discount_ticket').value
        console.log("fascia", userAge);
    }
)



//calcolo prezzo al chilometro
let ticketPrice
let finalPrice = document.getElementById('final_price');

btnTicket.addEventListener('click',
function() {
    ticketPrice = kmRequest * price;
    console.log('prezzo non scontato', ticketPrice);
    finalPrice.innerHTML = finalPrice.innerHTML + ticketprice
    }
)

//calcolo delo sconto
if (userAge < 18) {
    discount = ticketPrice * 0.20;
} else if (userAge > 65) {
    discount = ticketPrice * 0.40;
} else {
    discount = 0;
}
console.log("sconto", discount);

//totale da pagare
ticketPrice = ticketPrice - discount;0
console.log("Il totale da pagare è € ", ticketPrice);
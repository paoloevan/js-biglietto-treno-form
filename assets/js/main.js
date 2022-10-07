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

//chiedere chilometri da percorrere
//const kmRequest = Number(prompt("Quanti chilometri devi percorre?"));
console.log("chilometri", kmRequest);

//chiedere età del passeggero
//const userAge = Number(prompt("Quanti anni hai?"));
console.log("anni", userAge);

//calcolo prezzo al chilometro
let ticketPrice = kmRequest * price;
console.log("prezzo non scontato", ticketPrice);

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
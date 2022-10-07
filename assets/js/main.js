/*
Il numero di chilometri da percorrere
Età del passeggero 
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

const price = 0.21

//chiedere chilometri da percorrere
const kmRequest = prompt("Quanti chilometri devi percorre?");
console.log("chilometri", kmRequest);

//chiedere età del passeggero
const userAge = prompt("Quanti anni hai?");
console.log("anni", userAge);

//calcolo prezzo al chilometro
let ticketPrice = kmRequest * price;


// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina nomecognomecolorepreferito23

const defaultNumber = 23;

let nameUser = prompt("Inserisci il tuo nome");

let surnameUser = prompt("Inserisci il tuo cognome");

let colorUser = prompt("Inserisci il tuo colore preferito");

console.log(nameUser);
console.log(surnameUser);
console.log(colorUser);


document.getElementById("securepass").innerHTML = nameUser + surnameUser + colorUser + defaultNumber;
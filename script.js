//1
const name = prompt("Inserisci il tuo nome:");
console.log("Nome: ", name);

//2
const lastName = prompt("Inserisci il tuo cognome:");
console.log("Cognome: ", lastName);

//3
const favouriteColor = prompt("Inserisci il tuo colore preferito:");
console.log("Colore preferito: ", favouriteColor);

//4
const password = (name + lastName + favouriteColor + "24").toLowerCase();

//5
console.log("Password: ", password);

//6
document.getElementById("output").innerHTML = `
<p>
La tua nuova password è: <strong>${password}</strong>
</p>
`;

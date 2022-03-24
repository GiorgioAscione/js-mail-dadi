alert("Dobbiamo verificare se puoi accedere alla nostra pagina")

let email=prompt("Inserisci la tua email");
console.log(email);

// Lista email da confrontare //
let listemail = ["matteo@gmail.com", "fabio@gmail.com","pietro@gmail.com", "anna@gmail.com"];
console.log(listemail.length);

let emailTrovata = false

// Ciclo for //
for(let i=0; i<listemail.length; i= i+1){
    console.log(listemail[i]);
    // Istruzioni da eseguire //
    if (listemail[i]==email){
        (emailTrovata=true)
    }
}
    if (emailTrovata==true){
        alert("La tua email ha i permessi di accesso");
    }
    else {
        alert("La tua email non ha permessi di accesso");
    } 
const emailUtente = prompt ("inserisci la tua email")
console.log (emailUtente)

let email = [
    "trappougrokaupa-4192@yopmail.com",
    "brauquoicragribro-5744@yopmail.com",
    "jayicreihitti-8618@yopmail.com",
    "prullopeduma-8114@yopmail.com",
    "claudio-pascarella@libero.it"

];

console.log(email)
const emailCorretta = email[4];
 for (let i=0; i< email.length ; i++) {

   

    if( emailCorretta == email[4]) {
        alert("Accesso autorizzato")
    }

    else if (emailCorretta !== email[4]) {
        alert("accesso negato")
    }
   
 }
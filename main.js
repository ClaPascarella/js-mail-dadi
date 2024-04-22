let computer = Math.floor(Math.random ()*7 );
console.log(computer)

let utente =  Math.floor(Math.random ()*7 );
console.log (utente)

if(computer < utente) {
    console.log (`vince utente`);
}
else if(computer > utente) {
    console.log (`vince computer`);
}

else {
    console.log (`pareggio`);
}



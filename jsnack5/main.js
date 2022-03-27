let dispari = [];
let posizione = 0;
for(i = 0; i < 6; i++){
    user = (prompt("Inserisci il " + (i+1) + "° numero"));
    if (user %2 != 0){
        dispari [posizione] = user;
        posizione++;
    }
}
(alert("Ecco i numeri dispari" + dispari));
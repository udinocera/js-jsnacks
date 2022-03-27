//Invitati
let invitati = ["Umberto", "Chiara", "Agostino", "Angelo", "Beatrice", "Maria", "Rosa", "Paolo", "Matteo", "Bryan", "Costanza", "Francesco", "Armando"];
let userinvitato = prompt("Dimmi il tuo nome");
let ricerca = false;
for(i= 0; i < invitati.length; i++ ){
    if(userinvitato.toUpperCase() == invitati[i].toUpperCase()){
      ricerca = true;  
    }
}

if(ricerca){
    alert("Sei invitato!");

}
else{
    alert("Non sei invitato!");
}
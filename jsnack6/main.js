let partita = true;

while(partita){
    let randompc = Math.floor(Math.random() * 10);
    console.log(randompc);

    let user = parseInt(prompt("Inserisci un numero: "));
    console.log(user);

    if(user == randompc){
        alert("Hai vinto");
        partita = false;
    } else{
        alert("Hai perso");
    }
}
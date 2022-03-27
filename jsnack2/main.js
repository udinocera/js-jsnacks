
let primaParola = (prompt("Inserisci la prima parola"));
let secondaParola = (prompt("Inserisci la seconda parola"));
let lunghezzaprimaParola = primaParola.length;
let lunghezzasecondaParola = secondaParola.length;



if (lunghezzaprimaParola >= lunghezzasecondaParola) {
    (alert(secondaParola + " " + primaParola));
} else {
    (alert(primaParola + " " + secondaParola));
}
let array = [30, 21, 54, 77, 121, 32, 45, 74, 35, 111];

let calcolo = somma(array);
alert(calcolo);

function somma(totaleArray){
    let somma = 0;
    for(let i = 0; i < totaleArray.length; i++){
        somma = somma + totaleArray[i];
        console.log(somma);
    }
    return somma;
}
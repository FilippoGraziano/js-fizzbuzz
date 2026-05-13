//r Mostra tutti i numeri da 0 a 99
for (i = 0; i < 100; i++) {
    let value = i + 1;

    //r Se il numero è divisibile sia per 3 che per 5 allora tranformalo in "FizzBuzz"
    if (value % 3 === 0 && value % 5 === 0) value = `FizzBuzz`;
    //r Se il numero è divisibile per 3 allora diventa "Fizz"
    else if (value % 3 === 0) value = `Fizz`;
    //r Se il numero è divisibile per 5 allora diventa "Buzz"    
    else if (value % 5 === 0) value = `Buzz`;

    //r Stampa tutti i valori in console
    console.log (value);
}
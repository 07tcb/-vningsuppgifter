function isPrime(number){
    if (number/number==1 && number/1==number)
        return true
}
console.log(isPrime(5))
console.log(isPrime(3))

//svar
/*
function isPrime(number) {
    if (number <= 1) return false;  // Om talet är 1 eller mindre är det inte ett primtal.
    if (number === 2) return true;  // 2 är det enda jämna primtalet.

    // Testa delbarhet från 2 upp till kvadratroten av number.
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;  // Om talet är delbart med i, så är det inte ett primtal.
        }
    }

    return true;  // Om ingen delbarhet hittades, är talet ett primtal.
}

console.log(isPrime(5));  // true
console.log(isPrime(3));  // true
console.log(isPrime(4));  // false
console.log(isPrime(1));  // false
console.log(isPrime(11)); // true
*/



//alt svar (preferred)
/*
function isPrime(number) {
    if (number <= 1) return false; // Talen mindre än eller lika med 1 är inte primtal.

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false; // Om talet kan delas med något tal (förutom 1 och sig själv), är det inte ett primtal.
        }
    }

    return true; // Om inget tal delade jämnt är det ett primtal.
}

console.log(isPrime(5)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
*/
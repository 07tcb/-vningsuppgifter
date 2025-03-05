let arr = [12, 5, 7, 45, 4, 70, 3, 6];

let max = arr[0]; // Börja med första elementet som maxvärde

for (let i = 1; i < arr.length; i++) { // Loopa från andra elementet till sista
    if (arr[i] > max) {
        max = arr[i]; // Uppdatera max om vi hittar ett större tal
    }
}

console.log(max); // Skriver ut 70

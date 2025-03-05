function valsprak(str) {
    let vokaler = ["a", "o", "u", "å", "e", "i", "y", "ä", "ö"]; // Svenska vokaler
    let resultat = "";

    for (let i = 0; i < str.length; i++) {
        let bokstav = str[i];

        // Kolla om bokstaven (i lowercase) finns i vokaler
        if (vokaler.includes(bokstav.toLowerCase())) {
            resultat += bokstav.repeat(3); // Upprepa vokalen 3 gånger
        } else {
            resultat += bokstav; // Behåll konsonanter och skiljetecken
        }
    }

    return resultat;
}

// Testa funktionen
console.log(valsprak("Hur är läget?")); // "Huuur ääär lääägeeet?"
console.log(valsprak("Kaka kaka!"));    // "Kaaakaaa kaaakaaa!"
console.log(valsprak("javascript"));    // "jaaavaaascriiipt"
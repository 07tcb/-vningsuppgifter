function sättBetyg(name) {
    let grades = ["F", "E", "E", "C", "C", "C", "A", "A"];
    
    let person = {
        name: name,
        matematik: grades[Math.floor(Math.random() * grades.length)],
        svenska: grades[Math.floor(Math.random() * grades.length)],
        engelska: grades[Math.floor(Math.random() * grades.length)],
        idrott: grades[Math.floor(Math.random() * grades.length)],
        musik: grades[Math.floor(Math.random() * grades.length)],
        samhällsvetenskap: grades[Math.floor(Math.random() * grades.length)],
        fysik: grades[Math.floor(Math.random() * grades.length)],
        träslöjd: grades[Math.floor(Math.random() * grades.length)]
    };

    console.log(person);
}

sättBetyg("Alice");
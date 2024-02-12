/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
};

const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
console.log(athena);

const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
console.log(charisse);

const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
console.log(jenna);

const chelsea = hailTheQueen("Chelsea Brooks") // Argument value is "Jenna Solis"
console.log(chelsea);


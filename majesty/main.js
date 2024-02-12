/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/

const queens = [];


const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")


console.log(queens[0].name)
console.log(queens[0].id)
// const hailTheQueen = (nameString) => {
//     return `Hail Her Majesty, ${nameString}.`  // This function returns a string
// };

// const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
// console.log(athena);

// const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
// console.log(charisse);

// const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
// console.log(jenna);

// const chelsea = hailTheQueen("Chelsea Brooks") // Argument value is "Jenna Solis"
// console.log(chelsea);

// const ramona = hailTheQueen("Ramona Name")
// console.log(ramona)

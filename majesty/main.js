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
createQueen(2, "Queen 1")
createQueen(3, "Queen 2")
createQueen(4, "Queen 3")
createQueen(5, "Queen 4")


console.log(queens)


const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
};


for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)  // What should be passed as an argument?
    console.log(hailMessage)
};
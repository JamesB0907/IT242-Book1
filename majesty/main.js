/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/

const queens = [];
const tributeChest = []

const payTribute = ( tributeId, description, queenId) => {
    const tributeObject =
    {
        id: tributeId,
        queenId: queenId,
        description: description
    }
    tributeChest.push(tributeObject)
}

payTribute(1, "Gold", 4)
payTribute(2,"Gems", 3)
payTribute(3, "Silver", 1)
payTribute(4, "Platinum", 2)

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
console.log(tributeChest)

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
};


for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)  // What should be passed as an argument?
    console.log(hailMessage)
};

for (const queenObject of queens) {
    for (const tributeObject of tributeChest) {
        if (tributeObject.id === queenObject.id) {
            console.log(`${queenObject.name} receives ${tributeObject.description}`)
        }
    }
}
if (1 + 1 > 5) {
    console.log("True Fact!")
} else {
    console.log("LIES!!")
};

if (4 * 5 <= 20) {
    console.log("True Fact!")
} else {
    console.log("LIES!!")
};

if (6 - 2 <= 0) {
    console.log("True Fact!")
} else {
    console.log("LIES!!")
};

const likesDogs = true;

if (likesDogs) {
    console.log("You're a dog person!")
} else {
    console.log("You're a cat person!")
}

const person = {
    name: "James Brooks",
    preferredLanguage: "French"
};

if (person.preferredLanguage === "English") {
    console.log("Hello, " + person.name)
} else if (person.preferredLanguage === "Spanish") {
    console.log("Hola, " + person.name)
} else {
    console.log("Bonjour, " + person.name)
};

const grade = 0;
if (grade <= 69) {
    console.log("You got an F")
} else if (grade <= 76){
    console.log("You got a D")
} else if (grade <= 84) {
    console.log("You got a C")
} else if (grade <= 92) {
    console.log("You got a B")
} else {
    console.log("You got an A!!!")
}
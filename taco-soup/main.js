var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for (i = 0; i < harryPotterTitles.length; i++) {
    console.log("Harry Potter " + harryPotterTitles[i])
}

var numberOfAs = 0
var numberOfBs = 0
var numberOfCs = 0
var numberOfDs = 0
var numberofFs = 0
var total = 0
var mostCommonLetterGrade = ""
var averagePercentage = 0
var mostCommonGradeCount = 0

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

 for(var i = 0; i < grades.length; i++){
 if (grades[i] >= 70 && grades[i] <= 76){
    numberOfDs++
 }else if
   (grades[i] >= 77 && grades[i] <= 84){
    numberOfCs++
 }else if
   (grades[i] >= 84 && grades[i] <= 92){
   numberOfBs++
 }else if
   (grades[i] >= 93 && grades[i] <= 100){
   numberOfAs++
}else if
   (grades[i] >= 0 && grades[i] <= 69){
   numberofFs++
}
}
for(var i = 0; i < grades.length; i++){
   if(mostCommonGradeCount < numberOfAs){
      mostCommonGradeCount = numberOfAs
      mostCommonLetterGrade = "A"   
   }else if(mostCommonGradeCount < numberOfBs){
      mostCommonGradeCount = numberOfBs
      mostCommonLetterGrade = "B"  
   }else if(mostCommonGradeCount < numberOfCs){
      mostCommonGradeCount = numberOfCs
      mostCommonLetterGrade = "C"  
   }else if(mostCommonGradeCount < numberOfDs){
      mostCommonGradeCount = numberOfDs
      mostCommonLetterGrade = "D"
   }else if(mostCommonGradeCount < numberofFs){
      mostCommonGradeCount = numberofFs
      mostCommonLetterGrade = "F"    
   }
}

for(var i = 0; i < grades.length; i++) {
   total += grades[i];
}
var averagePercentage = total / grades.length;

console.log(numberOfAs)
console.log(numberOfBs)
console.log(mostCommonLetterGrade)
console.log(averagePercentage)

let s = ''
for (i = 2; i <= 8; i += 2) {
    s += i + ' '
} console.log(s + "Who do you appreciate????")

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

var sentence = ""
   for(var i = 0; i < sentenceArray.length; i++)
   // (i % 3 == 0) returns 'true' or 'false' depending on if the array index divides evenly by 3 with no remainders ('0')
   if ((i % 3 == 0) && (i != 0)) {
    sentence = (sentence + ` MOOOOOO ` + sentenceArray[i])
} else (sentence = sentence + " " + sentenceArray[i])

console.log(sentence)

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}


console.log(`${beatles.members[0].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[0].birth}. He contributed heavily to the ${beatles.albums[0]} Album.`)





// //inputs
// <!-- userInput
// initialize inputs
// # userInputNoun as none
// # userInputAdjective as none
// # userInputAdverb as none
// # userInputVerb as none

// # SentenceOneNoun : sentenceOnePartOne + missingPart + sentenceOnePartTwo
// # SentenceTwoVerb : sentenceTwoPartOne + missingPart + sentenceTwoPartTwo
// # SentenceThreeAdverb : sentenceThreePartOne + missingPart + sentenceThreePartTwo
// # SentenceFourAdjective : sentenceFourPartOne + missingPart + sentenceFourPartTw0    

// //process
// begin
// # promt "Please input your Noun, verb, adverb, SentenceFourAdjective"
// # assign the input as userInputNoun, userInputAdjective, userInputAdverb
// # and userInputVerb.

// # Display sentenceOnePartOne + userInputNoun + sentenceOnePartTwo
// # Display sentenceTwoPartOne + userInputVerb + sentenceTwoPartTwo
// # Display sentenceThreePartOne + userInputAdverb + sentenceThreePartTwo
// # Display sentenceFourPartOne + userInputAdjective + sentenceFourPartTwo

// END Exercise-4 -->

const parts = ['noun', 'adjective', 'verb', 'adverb'];
const partsOfSentence = {
    noun: "",
    adjective: "",
    verb: "",
    adverb: ""

}

for (var i = 0; i < parts.length; i++) {
    var missingPart = prompt(`Please type your ${parts[i]}`);

    switch (parts[i]) {
        case 'noun':
            partsOfSentence.noun = missingPart;
            break;
        case 'adjective':
            partsOfSentence.adjective = missingPart;
            break;
        case 'verb':
            partsOfSentence.verb = missingPart;
            break;
        case 'adverb':
            partsOfSentence.adverb = missingPart;
            break;
    }
}

var story = `Today I go to the Zoo, where I saw a ${partsOfSentence.adjective} ${partsOfSentence.noun}. I ${partsOfSentence.verb} so ${partsOfSentence.adverb}`;
console.log(story);



// ^********************************************************************************************************

function Person(name, partnersName, numberOfChildren, location, jobTitle) {
    this.name = name;
    this.partnersName = partnersName;
    this.numberOfChildren = numberOfChildren;
    this.location = location;
    this.jobTitle = jobTitle
    this.fortuneTeller = function () {
        console.log(`You will be ${this.name} in ${this.location}, and married to ${this.partnersName} with ${this.numberOfChildren} kids.`);
    }
}

let p1 = new Person('Seb', 'Jessica', 2, 'USA', 'Prasident');
console.log(p1.fortuneTeller());
let p2 = new Person('Mustafa', 'Adriana', 4, 'Norway', 'Boss');
console.log(p2.fortuneTeller());
let p3 = new Person('Dominic', 'Ayse', 3, 'Turkey', 'General Manager');
console.log(p3.fortuneTeller());


// ^********************************************************************************************************

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Change your top choices into objects, e.g. presidents with name, year of presidency, etc as properties.
const topChoices = ['Besiktas', 'Death Poetry Society', 'Tarkan'];
for (var i = 0; i < topChoices.length; i++) {
    console.log("My #" + (i + 1) + " choice is " + topChoices[i]);
}

let footballTeam = {
    name: 'Besiktas',
    foundingYear: 1903,
    numberofTitle: 16,
    origin: 'Turkey',

}

function filmCreator(name, year, star, director) {
    this.name = name;
    this.year = year;
    this.star = star;
    this.director = director
}
let film1 = new filmCreator('Troy', 2004, 'Brad Pitt', 'Wolfgang Petersen');
console.log(film1);

function singerCreator(name, origin, age, numberOfAlbums) {
    this.name = name;
    this.origin = origin;
    this.age = age;
    this.numberOfAlbums = numberOfAlbums;
    this.printSinger = function () {
        console.log(`My favourite singer is ${this.name} from ${this.origin} . He is ${this.age} years old and so far has ${this.numberOfAlbums}.`);
    }
}

let singer1 = new singerCreator('Tarkan', 'Turkey', 50, 10);
singer1.printSinger();
console.log("=================================================")





const array = ['id', 'name', 'age'];
const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item,
        };
    }, initialValue);
};

console.log(
    convertArrayToObject(
        [
            { id: 111, name: 'John', age: 29 },
            { id: 112, name: 'Sarah', age: 25 },
            { id: 122, name: 'Kate', age: 22 },
            { id: 123, name: 'Tom', age: 21 },
            { id: 125, name: 'Emma', age: 24 },
        ],
        'id',
    ),
);


// ***********************************************************************************************
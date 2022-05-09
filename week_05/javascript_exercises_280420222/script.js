/** Let's recap what we learned so far */

let testString = 'This is a string';
const pi = 3.14;
var checkThis = true;
let variable;
let animals = ['cat', 'dog', 'mouse'];


for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

let person = {
    lastname: 'Koenig',
    firstname: 'Susanne',
    gender: 'female',
    isMarried: false,
    hasChildren: false,
    noOfChildren: 0,
    spokenLanguages: ['German', 'English', 'French'],
    languageSkills: {
        motherTongue: 'German',
        advanced: 'English',
        basic: ['French', 'Finnish']
    },
}

//for of loop
for (let animal of animals) {
    console.log(animals);
}

//for in loop
for (let x in animals) {
    console.log(animals[x]);
}

// function
console.log(calculate(5, 7, "+"));

let calculateAsExpression = function (number1, number2, operator) {
    return number1;
}

let calculateAsArrow = (number1, number2, operator) => {
    switch (operator) {
        case '+':
            return number1 + number2;
            break;
        case '-':
            return number1 - number2;
            break;
        case '*':
            return number1 * number2;
            break;
        case '/':
            return number1 / number2;
            break;
        default:
            return 'Warning';

    }
}

function calculate(number1, number2, operator) {
    if (operator === "+") {
        return number1 + number2;
    } else if (operator === "-") {
        return number1 - number2;
    } else if (operator === '*') {
        return number1 * number2;
    } else if (operator === "/") {
        return number1 / number2;
    } else {
        return 'This is not a valid operator. Please use either +, -, *, or /'
    }
};


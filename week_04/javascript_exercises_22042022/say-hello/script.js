
// *************************************************************************************
//  capitalize the first letter of the name

// let yourName = prompt("Please enter your name!");

// alert(`Greetings ${yourName[0].toUpperCase()}${yourName.substring(1)}`)

// *************************************************************************************
//   for nouns with more than one word

const yourName = prompt("Please enter your name!");
function greet(item) {
    const words = item.split(" ");
    alert(`Greetings ${words.map((word) => { return word[0].toUpperCase() + word.substring(3); }).join(" ")}`);
};

greet(yourName);
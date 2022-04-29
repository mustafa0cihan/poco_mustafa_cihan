// const testPerson = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// let { firstName, lastName, age } = testPerson;
// const { eyeColor } = testPerson;
// console.log(age);
// console.log(eyeColor);


// firstName = "Jane"
// console.log(firstName);
// console.log(testPerson.firstName);

// eyeColor = "black"
// console.log(eyeColor);
// console.log(testPerson.eyeColor);

// --------------------------------------


// function q1() {
//     var a = 5;
//     if (a > 1) {
//         var a = 3;
//     }
//     console.log(a);
// }

// q1();

// --------------------------------------
// var b = 0;
// function q2() {
//     b = 5;
// }

// function q22() {
//     console.log(b);
// }

// q2();

// q22();

// -----------------------------------------


// var b = 1;
// function q4() {
//     var b = "test";
//     console.log(b);
// }

// q4()

// console.log(b);

// -----------------------------------------

// var c = 2;
// if (true) {
//     var c = 5;
//     console.log(c);
// }
// console.log(c);

// -----------------------------------------

// let c = 2;
// if (true) {
//     let c = 5;
//     console.log(c);
// }
// console.log(c);

// -----------------------------------------


// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             break;
//             whatHappens = "you encounter a monster";
//         case "back":
//             whatHappens = "you arrived home";
//             break;
//             break;
//         case "right":
//             return whatHappens = "you found a river";
//             break;
//         case "left":
//             break;
//             return whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid direction";
//     }
//     return whatHappens;
// }

// moveCommand("forward");
// moveCommand("back");
// moveCommand("right");


// -----------------------------------------
// let paragraph = document.querySelector('#changeMe');
// let new_text = "the text was magically changed.";
// paragraph.innerText = new_text;
// paragraph.textContent = "... and gone"

// let list = document.querySelectorAll("li")
// // list.foreach((li, index) => {
// //     li.innerText = index + 1;
// // })

// for (let li of list) {
//     // li.innerText = li.innerText.substring(5);
//     li.innerText = li.innerText.replace('item', "")
// }


// -----------------------------------------
// var h2 = document.querySelector("h2");
// // h2.onclick = function () { writeIntoConsole() };

// function writeIntoConsole() {
//     console.log(writeIntoConsole);
//     alert("Open console!");
// }

// // window.onload = function () {
// //     writeIntoConsole();
// // };

// document.querySelector("h2").addEventListener("click", writeIntoConsole, true);

// document.querySelector("h2").removeEventListener("click", writeIntoConsole);


// let urlDisplayElement = document.getElementById('urlDisplay');
// let currentUrl = window.location;
// urlDisplayElement.innerHMTL = `Current url is: ${currentUrl}`



// let object = {
//     "someProperty": "something",
//     "someOtherProperty": "somethingElse"
// }

// User shall be able to print the property they want
// let userInput = document.getElementById('input').value;


// document.getElementById('output').innerText = eval("object." + userInput);
//             // People really wrote this code -> not my idea
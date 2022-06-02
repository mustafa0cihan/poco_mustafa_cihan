// // array.map()

// //the old way
// function WhoIsMe() {
//     let names = ["Susanne", "Mark", "Linus", "Hussam"];
//     for (let name of names) {
//         if (name === "Susanne")
//             return true;

//         return false;
//     }
// }

// //the new way
// let names = ["Susanne", "Mark", "Linus", "Hussam"];
// let me = names.map(name => {
//     return name === "Susanne";
// });



// let otherNames = ["Susanne", "Mark", "Linus", "Hussam"];
// let firstArray = otherNames.map(name => name === "Susanne")
// let secondArray = otherNames.map((name, i) => i)
// console.log(firstArray)
// console.log(secondArray)

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = words.map(item => { return (item + item) });

console.log(result);
// var list = [1, 5, 25, 3, 2];

// list.sort(function (a, b) { return a - b; });

// console.log(array)

// ***********************************************************

// var smallest_value = Number.MAX_VALUE;

// for (var index = 0; index < list.length; index++) {
//     var current_value = list[index];
//     if (current_value < smallest_value) {
//         smallest_value = current_value;
//     }
// };

// console.log(smallest_value);

// ***********************************************************

// var smallest_value = undefined;

// for (var index = 0; index < list.length; index++) {
//     var current_value = list[index];
//     if (smallest_value == undefined || current_value < smallest_value) {
//         smallest_value = current_value;
//     }
// };

// console.log(smallest_value);

// ***********************************************************
// let list = [4, 1, 2];

// for (var iter = 0; iter < list.length; iter++) {
//     var smallest_value = undefined;
//     var smallest_value_index = -1;

//     for (var index = iter; index < list.length; index++) {
//         var current_value = list[index];
//         if (smallest_value == undefined || current_value < smallest_value) {
//             smallest_value = current_value;
//             smallest_value_index = index
//         }
//     };

//     //swap two elements of the list
//     var temp = list[smallest_value]
//     list[smallest_value_index] = list[iter];
//     list[iter] = temp;
// };

// console.log(list);
// ***********************************************************


// let numberList = [42, -1, 3];

// for (let index = 0; index < numberList.length - 1; index++) {
//     if (numberList[index] > numberList[index + 1]) {
//         let temp = numberList[index];
//         numberList[index] = numberList[index + 1];
//         numberList[index + 1] = temp
//     }
//     console.log(numberList)
//     for (let i = 0; i < indexed; i++) {
//         let temp
//         numberList[i] >
// };

// }

// ***********************************************************

// let numberList = [60, 35, 84, 25, -5, 8, -3, 98796, -5];
// var min = arr[0]
// var max = arr[0];

// for (var i = 0; i < numberList.length; i++) {
//     if (max < numberList[i])
//         max = numberList[i];

//     if (min > numberList[i])
//         min = numberList[i];
// };

// console.log(min);

// ***********************************************************


let numberList = [60, 35, 84, 25, -5, 8, -3, 98796, -5];
var min = numberList[0]
var max = numberList[0];

for (var i = 0; i < numberList.length; i++) {

    if (max < numberList[i])
        max = numberList[i];

    if (min > numberList[i])
        min = numberList[i];
};

console.log(min);
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// console.log(array);
// array.shift();
// console.log(array);
// array.sort();
// console.log(array);
// array.push("Kiwi");
// console.log(array);
// array.shift();
// console.log(array);
// array.reverse()
// console.log(array);

/**Exercise: Your top choices
Create an array to hold your top choices(colors, presidents, whatever).
For each choice, log to the screen a string like: "My #1 choice is blue."
Change it to log "My 1st choice, "My 2nd choice", 
"My 3rd choice", picking the right suffix for the number based on what it is.*/


function allChoices() {
    let topChoices = {
        Team: "Galatasaray FC",
        Color: "Blue",
        Number: 8,
        Day: "Saturday",
        Sport: "Football",
        Film: "Inception",
    };

    for (let i = 0; i < 6; i++) {
        console.log(
            "My " +
            (i + 1) +
            ". choice:" +
            " My Favorite " +
            Object.keys(topChoices)[i] +
            " is " +
            topChoices[Object.keys(topChoices)[i]]
        );
    }
}

allChoices();

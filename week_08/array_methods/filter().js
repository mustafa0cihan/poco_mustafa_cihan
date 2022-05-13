//the old way
function WhoIsMe() {
    let names = ["Susanne", "Mark", "Linus", "Hussam"];
    for (let name of names) {
        if (name === "Susanne")
            return "Susanne";
    }
}

//the new way
let names = ["Susanne", "Mark", "Linus", "Hussam"];
let me = names.filter(name => {
    return name === "Susanne";
});


let myName = names.filter(name => name === "Susanne");

console.log(myName[0])




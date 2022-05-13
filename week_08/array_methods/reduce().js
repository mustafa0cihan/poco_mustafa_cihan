//the old way
function WhoIsMe() {
    let names = ["Susanne", "Mark", "Linus", "Hussam"];
    for (let name of names) {
        if (name === "Susanne")
            return true;
    }
}

// the new way
let names = ["Susanne", "Mark", "Linus", "Hussam"];
let me = names.reduce(name => {
    return name === "Susanne";
});

console.log(me)

// **********************************

let otherNames = ["Su", "san", "ne"];
let newArray = otherNames.reduce((prev, current) => prev += current, "");
console.log(newArray)


let cart = [
    {
        product_id: 89898,
        product_name: "Napkin red",
        product_price: 6.50,
        quantity: 10
    },
    {
        product_id: 123,
        product_name: "Plastic forks",
        product_price: 1.25,
        quantity: 15
    }
]

// first solution
// let pricePerProduct = cart.map(
//     product => product.product_price * product.quantity
// )
// console.log(pricePerProduct)

// let total = pricePerProduct.reduce((acc, current) =>
//     acc += current, 0)

// console.log(total)

// second solution

let total = cart.reduce((acc, current) =>
    acc += current.product_price * current.quantity, 0);
console.log(total)
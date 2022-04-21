function getNumber(x) {
    var x = prompt(`Please enter a number between 0 and 20`);

    if (isNaN(x)) {
        // for another variable type
        alert("This value is not number");
        getNumber(x);
    } else if (x == null || x === "") {
        // for cancelation or empty value
        alert("You must enter any value");
        getNumber(x);
    } else {
        reportNumber(x);
    }
};

function reportNumber(x) {
    if (x < 0 || x > 20) {
        // for controlling limitation
        alert("This value is not between 0 and 20");
        getNumber(x);
    } else if (x % 2 === 0) {
        // for even numbers
        alert(x + " is even");
    } else {
        // for odd numbers
        alert(x + " is odd");
    }
}
getNumber();

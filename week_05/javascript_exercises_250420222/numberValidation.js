const number = "07 812-345.67";

const arrayNumber = number.split('');

const filtered = [];

arrayNumber.forEach(element => {
    if (element !== ' ') {
        filtered.push(element);
    }
});

function checkNumber(params) {
    const digitNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return params.map((item) => {
        if (digitNumber.indexOf(item)) {
            return console.log(true);
        } else {
            return console.log(false);
        }
    })
};

checkNumber(filtered);
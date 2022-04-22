"Age calculator -2"
/* ---------------------------------------------------------------------------- */

function probableAgeCalculation() {
    const birthYear = prompt("Please enter your birthyear")
    const birthMonth = prompt("Please enter your birthmonth as a number")
    const futureYear = prompt("Please enter the year you are wondering about your age");
    const futureMonth = prompt("Please enter the month you are wondering about your age as a number");
    const months = ["Januar", "Februar", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (birthMonth < futureMonth || birthMonth == futureMonth) {
        alert(`You will be ${futureYear - birthYear} years old in ${months[futureMonth - 1]} ${futureYear}`)
    } else {
        alert(`You will be ${futureYear - birthYear - 1} years old in ${months[futureMonth - 1]} ${futureYear}`)
    }
};
probableAgeCalculation();
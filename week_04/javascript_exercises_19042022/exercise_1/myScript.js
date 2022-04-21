// "Fortune teller - 1"
/* ---------------------------------------------------------------------------- */
// let myJob = "Junior Software Developer"
// let myCity = "Zürich"
// let myPartner = "Zehra"
// let numberOfChildren = 3

// alert(`You will be a ${myJob} in ${myCity}, and married to ${myPartner} with ${numberOfChildren} kids.`)

// "Fortune teller - 2"
/* ---------------------------------------------------------------------------- */

// const jobs = ["Junior Software Developer", "Senior Software Developer", "Web Designer", "Full-Stack Developer", "Front-end Developer", "Back-end Developer"]
// const cities = ["Zürich", "Bern", "Luzern", "Basel", "Lausanne", "Geneva"]
// const numberOfChildren = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const partners = ["Adele", "Agatha", "Angelina", "Carmen", "Daphe", "Daisy", "Hillary", "Helena", "Nicole", "Olivia", "Pamela", "Regina", "Rose", "Rebecca", "Sierra", "Yolanda"]

// let yourJob = jobs[Math.floor(Math.random() * jobs.length)];
// let yourCity = cities[Math.floor(Math.random() * cities.length)];
// let yourPartner = partners[Math.floor(Math.random() * partners.length)];
// let yourChildrenNumber = numberOfChildren[Math.floor(Math.random() * numberOfChildren.length)];

// alert(`You will be a ${yourJob} in ${yourCity}, and married to ${yourPartner} with ${yourChildrenNumber} kids.`)

// "Age calculator -1"
// /* ---------------------------------------------------------------------------- */

// const myBirtDate = 1988
// const futureDate = 2044

// alert(`I will be either ${futureDate - myBirtDate} or ${futureDate - myBirtDate - 1} in ${futureDate}`)

// "Age calculator -2"
// /* ---------------------------------------------------------------------------- */

// function probableAgeCalculation() {
//     const birthDate = prompt("Please enter your birthyear")
//     let futureDate = prompt("Please enter the year you are wondering about your age");
//     if (futureDate < birthDate) {
//         alert("Please enter a value greater than your year of birth.");
//         probableAgeCalculation();
//     } else {
//         alert(`You will be either ${futureDate - birthDate} or ${futureDate - birthDate - 1} in ${futureDate}`)
//     }
// };
// probableAgeCalculation();

// "Say hello"
// /* ---------------------------------------------------------------------------- */

// function greetingUser() {
//     var yourName = prompt("Please enter your name");
//     console.log(typeof yourName);
//     if (typeof yourName !== 'string') {
//         document.write(`Greetings ${yourName}, welcome to my page!`);
//     } else {
//         var yourName = prompt("The value you entered is not a text. Please enter again your name as text.");
//         document.write(`Greetings ${yourName}, welcome to my page!`);
//     }
// };

// greetingUser();

// "Counting the number of characters"
// /* ---------------------------------------------------------------------------- */

// let text = prompt("Please enter a text")
// alert(`The following text you entered is ${text.length} characters long.

// ${text}`)

// "Printing quotes"
// /* ---------------------------------------------------------------------------- */

// let author = prompt("Please enter an author name")
// let quotes = prompt("Please enter a quote from an author's work")

// getAuthor();



// alert(`${author} says, "${quotes}"`)


for (let number = 10; number > 0; number--) {
    console.log(number);
}
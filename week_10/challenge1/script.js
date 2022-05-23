
const box = document.querySelector("button");
const text = document.querySelector("span");

box.addEventListener("focus", function () {
    text.textContent = "Type a number between 1 and 5"
})

box.addEventListener("focusout", function () {
    text.textContent = "Click here to give your rating"
    text.removeAttribute('id')
})


// Write your code here 👇

box.addEventListener('keydown', (e) => {
    let emoji;
    let idName;

    switch (e.key) {
        case "1":
            emoji = "🤬";
            break;
        case "2":
            emoji = "☹️";
            break;
        case "3":
            emoji = "😐";
            break;
        case "4":
            emoji = "🙂";
            break;
        case "5":
            emoji = "😁";
            break;
        default:
            emoji = "Please type a number between 1 and 5";
            break;
    }

    text.textContent = emoji;
    text.setAttribute('id', idName);
})
const mainContainer = document.querySelector("main");
const equationField = document.querySelector("input");
const solveButton = document.querySelector("button");
const solutionDisplay = document.querySelector("h3");

solveButton.addEventListener("click", function () {
    // Clears the solution contents on each click
    solutionDisplay.innerHTML = ``;

    // Write your code here 👇
    let equationValue = equationField.value;
    let equationList = equationValue.split("");
    let num1 = parseInt(equationList[0]);
    let num2 = parseInt(equationList[2]);
    let result;
    switch (equationList[1]) {
        case "+": result = num1 + num2;
            break;
        case "-": result = num1 - num2;
            break;
        case "*": result = num1 * num2;
            break;
        case "/": result = num1 / num2;
            break;
            console.log(result)
    }
    let component = document.createElement('span');
    component.classList.add('equation-component');
    solutionDisplay.appendChild(component);
    component.textContent = result;
});

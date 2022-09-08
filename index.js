// const app = document.querySelector("#app");
// app.textContent = "hello, world";

// basic arithmetic functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const getRemainder = (a, b) => a % b;

// operation function -- returns output to user
function operate(operator, operand1, operand2) {
    switch (operator) {
        case "+":
            return add(operand1, operand2);
        case "-":
            return subtract(operand1, operand2);
        case "*":
            return multiply(operand1, operand2);
        case "/":
            return divide(operand1, operand2);
        case "%":
            return getRemainder(operand1, operand2);
        default:
            return "whoops!";
    }
}

const btnContainer = document.querySelector("#btn-container");
const lowerDisplay = document.querySelector("#display-lower");

// const array = ["del", 0, "clear", 1, 2, 3, 4, 5, 6, 7, 8, 9];
const array = [
    7,
    8,
    9,
    "+",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "*",
    ".",
    0,
    "=",
    "/",
    "clear",
    "del",
    "%",
];

array.forEach((item) => {
    const btn = document.createElement("div");
    btn.textContent = item;
    if (item === "=") btn.classList.add("equals");
    if (item === "del") btn.classList.add("del");
    if (item === "clear") btn.classList.add("clear");
    if (
        item === "+" ||
        item === "-" ||
        item === "*" ||
        item === "/" ||
        item === "%"
    )
        btn.classList.add("operator");
    btn.classList.add("num");
    btnContainer.appendChild(btn);
    btn.addEventListener("click", (e) => {
        lowerDisplay.textContent = e.target.innerText;
        console.log(typeof e.target.innerText);
    });
});

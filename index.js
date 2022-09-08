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

console.log(operate("%", 7, 3));

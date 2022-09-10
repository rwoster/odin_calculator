// DOM elements
const btnContainer = document.querySelector("#btn-container");
const lowerDisplay = document.querySelector("#display-lower");
const upperDisplay = document.querySelector("#display-upper");

// user input variables
let operand1 = "";
let operand2 = "";
let operator = "";

// button data
const calcBtns = [
    { value: "7", class: ["btn", "num"] },
    { value: "8", class: ["btn", "num"] },
    { value: "9", class: ["btn", "num"] },
    { value: "+", class: ["btn", "operator"] },
    { value: "4", class: ["btn", "num"] },
    { value: "5", class: ["btn", "num"] },
    { value: "6", class: ["btn", "num"] },
    { value: "-", class: ["btn", "operator"] },
    { value: "1", class: ["btn", "num"] },
    { value: "2", class: ["btn", "num"] },
    { value: "3", class: ["btn", "num"] },
    { value: "*", class: ["btn", "operator"] },
    { value: ".", class: ["btn", "num"] },
    { value: "0", class: ["btn", "num"] },
    { value: "=", class: ["btn", "equals"] },
    { value: "/", class: ["btn", "operator"] },
    { value: "clear", class: ["btn", "clear"] },
    { value: "del", class: ["btn", "del"] },
    { value: "%", class: ["btn", "operator"] },
];

// paints the calculator to the DOM
calcBtns.forEach((item) => {
    // create button elements
    const btn = document.createElement("div");
    // assign value to button
    btn.textContent = item.value;
    // assign proper classes to the button
    item.class.forEach((className) => {
        btn.classList.add(className);
    });
    // append button to DOM
    btnContainer.appendChild(btn);
});

function setUpperDisplayText() {
    upperDisplay.textContent = `${operand1} ${operator}`;
}
function setLowerDisplayText() {
    lowerDisplay.textContent = `${operand1}`;
}

// operation function -- returns output to user
function operate(operator, operand1, operand2) {
    switch (operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            return operand1 / operand2;
        case "%":
            return operand1 % operand2;
        default:
            return "whoops!";
    }
}

// button nodeLists
const numBtns = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".del");
const equalsBtn = document.querySelector(".equals");

let hasFirstOperand = false;

numBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // const input = parseInt(e.target.innerHTML);
        const input = e.target.innerHTML;
        console.log(input);
        if (!hasFirstOperand) {
            operand1.concat(input);
            console.log(operand1);
        }
    });
});
opBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        hasFirstOperand = true;
        operator = e.target.innerHTML;
        console.log(operator);
    });
});
equalsBtn.addEventListener("click", () => {
    if (operator && operand1 && operand2) {
        operate(operator, operand1, operand2);
    }
});
clearBtn.addEventListener("click", () => {
    operator = "";
    operand1 = "";
    operand2 = "";
    hasFirstOperand = false;
});
delBtn.addEventListener("click", () => {
    // operand1
});

// DOM elements
const btnContainer = document.querySelector("#btn-container");
const lowerDisplay = document.querySelector("#display-lower");
const upperDisplay = document.querySelector("#display-upper");

// user input variables
let operand1 = "";
let operand2 = "";
let operator = "";
let hasFirstOperand = false;
let isOperating = false;

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
    if (!hasFirstOperand) {
        upperDisplay.textContent = `${operand1}`;
    } else if (hasFirstOperand && !isOperating) {
        upperDisplay.textContent = `${operand1} ${operator}`;
    } else if (hasFirstOperand && isOperating) {
        upperDisplay.textContent = `${operand1} ${operator} ${operand2}`;
    }
}
function setLowerDisplayText() {
    lowerDisplay.textContent = hasFirstOperand ? operand2 : operand1;
}

// operation function -- returns output to user
function operate(operator, operand1, operand2) {
    switch (operator) {
        case "+":
            return parseInt(operand1) + parseInt(operand2);
        case "-":
            return parseInt(operand1) - parseInt(operand2);
        case "*":
            return parseInt(operand1) * parseInt(operand2);
        case "/":
            return parseInt(operand1) / parseInt(operand2);
        case "%":
            return parseInt(operand1) % parseInt(operand2);
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

//{working} INTEGER BTNS
numBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const input = e.target.innerHTML;
        if (!hasFirstOperand) {
            operand1 = operand1.concat(input);
        } else {
            operand2 = operand2.concat(input);
        }
        setLowerDisplayText();
    });
});

//{working} OPERATOR BTNS
opBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        hasFirstOperand = true;
        operator = e.target.innerHTML;
        setUpperDisplayText();
    });
});

//{needsWork} EQUALS BTN
equalsBtn.addEventListener("click", () => {
    if (hasFirstOperand) {
        isOperating === true;
        setUpperDisplayText();
        if (isOperating) {
            lowerDisplay.textContent = operate(operator, operand1, operand2);
        }
        isOperating === false;
    }
});

//{working} CLEAR BTN
clearBtn.addEventListener("click", () => {
    operator = "";
    operand1 = "";
    operand2 = "";
    hasFirstOperand = false;
    setLowerDisplayText();
    setUpperDisplayText();
});

//{working} DELETE BUTTON
delBtn.addEventListener("click", () => {
    if (!hasFirstOperand) {
        operand1 = operand1.slice(0, -1);
        setLowerDisplayText();
    }
});

// window.addEventListener("click", () => {
//     console.log(`
//         operand1: ${operand1}
//         operator: ${operator}
//         operand2: ${operand2}
//     `);
// });

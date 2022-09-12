// DOM elements
const btnContainer = document.querySelector("#btn-container");
const lowerDisplay = document.querySelector("#display-lower");
const upperDisplay = document.querySelector("#display-upper");

// user input variables
let operand1 = "";
let operand2 = "";
let operator = "";
let firstOperand = true;

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
    { value: ".", class: ["btn", "num", "decimal"] },
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
    if (operand2.length > 0) {
        upperDisplay.textContent = `${operand1} ${operator} ${operand2}`;
    } else if (firstOperand) {
        upperDisplay.textContent = `${operand1}`;
    } else if (!firstOperand) {
        upperDisplay.textContent = `${operand1} ${operator}`;
    }
}
function setLowerDisplayText() {
    lowerDisplay.textContent = firstOperand ? operand1 : operand2;
}
function setDisplays() {
    setUpperDisplayText();
    setLowerDisplayText();
}

// operation function -- returns output to user
function operate(operator, operand1, operand2) {
    switch (operator) {
        case "+":
            return parseFloat(operand1) + parseFloat(operand2);
        case "-":
            return parseFloat(operand1) - parseFloat(operand2);
        case "*":
            return parseFloat(operand1) * parseFloat(operand2);
        case "/":
            return parseFloat(operand1) / parseFloat(operand2);
        case "%":
            return parseFloat(operand1) % parseFloat(operand2);
        default:
            return "whoops!";
    }
}

function clearInputs() {
    operand1 = "";
    operator = "";
    operand2 = "";
    firstOperand = true;
}

// button nodeLists
const numBtns = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".del");
const equalsBtn = document.querySelector(".equals");
const decimalBtn = document.querySelector(".decimal");

//{working} INTEGER BTNS
numBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const input = e.target.innerHTML;
        if (firstOperand) {
            operand1 = operand1.concat(input);
        } else {
            operand2 = operand2.concat(input);
        }
        setDisplays();
    });
});

//{working} OPERATOR BTNS
opBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (operand1.length > 0) {
            firstOperand = false;
            operator = e.target.innerHTML;
            setUpperDisplayText();
        }
        decimalBtn.classList.remove("disabled");
    });
});

//{working} EQUALS BTN
equalsBtn.addEventListener("click", () => {
    if (operand2.length > 0) {
        setUpperDisplayText();
        const answer = operate(operator, operand1, operand2);
        lowerDisplay.textContent = answer;
        clearInputs();
        decimalBtn.classList.remove("disabled");
    }
});

//{working} CLEAR BTN
clearBtn.addEventListener("click", () => {
    clearInputs();
    setDisplays();
    decimalBtn.classList.remove("disabled");
});

//{working} DELETE BUTTON
delBtn.addEventListener("click", () => {
    if (firstOperand) {
        operand1 = operand1.slice(0, -1);
        setDisplays();
    } else {
        operand2 = operand2.slice(0, -1);
        setDisplays();
    }
});

//{working}
decimalBtn.addEventListener("click", () => {
    if (firstOperand) {
        if (operand1.includes(".")) {
            decimalBtn.classList.add("disabled");
        }
    } else {
        if (operand2.includes(".")) {
            decimalBtn.classList.add("disabled");
        }
    }
});

window.addEventListener("keypress", (e) => {
    console.log(e.key);
    if (e.key === "0") {
        console.log("hooray!");
    }

    //{working} catch INTEGERS
    if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9"
    ) {
        const input = e.key;
        if (firstOperand) {
            operand1 = operand1.concat(input);
        } else {
            operand2 = operand2.concat(input);
        }
        setDisplays();
    }

    //{working} catch decimals
    if (e.key === ".") {
        const input = e.key;
        if (firstOperand) {
            operand1 = operand1.concat(input);
            if (operand1.includes(".")) {
                decimalBtn.classList.add("disabled");
            }
        } else {
            operand2 = operand2.concat(input);
            if (operand2.includes(".")) {
                decimalBtn.classList.add("disabled");
            }
        }
        setDisplays();
        console.log(input);
    }

    //{working}catch OPERANDS
    if (
        e.key === "+" ||
        e.key === "-" ||
        e.key === "*" ||
        e.key === "/" ||
        e.key === "%"
    ) {
        if (operand1.length > 0) {
            firstOperand = false;
            operator = e.key;
            setUpperDisplayText();
        }
        decimalBtn.classList.remove("disabled");
    }

    //{working}catch a key for CLEAR
    if (e.key === "c" || e.key === "C") {
        clearInputs();
        setDisplays();
        decimalBtn.classList.remove("disabled");
    }

    //{working}catch a key for DEL
    if (e.key === "Delete") {
        if (firstOperand) {
            operand1 = operand1.slice(0, -1);
            setDisplays();
        } else {
            operand2 = operand2.slice(0, -1);
            setDisplays();
        }
    }

    //{working}catch a key for equals
    if (e.key === "Enter") {
        if (operand2.length > 0) {
            setUpperDisplayText();
            lowerDisplay.textContent = operate(operator, operand1, operand2);
            clearInputs();
            decimalBtn.classList.remove("disabled");
        }
    }
});

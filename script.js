const display = document.getElementById("display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".chinno");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
let firstNumber = ""
let currentOperator = ""
digits.forEach(function(button) {
    button.addEventListener("click", function() {
        if (display.textContent === "0") {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    });
});
operators.forEach(function(button) {
    button.addEventListener("click", function() {
        firstNumber = display.textContent;
        currentOperator = button.textContent;
        display.textContent = "0";
    });
});
equals.addEventListener("click", function() {
    const a = Number(firstNumber);
    const b = Number(display.textContent);
    if (currentOperator === "+") {
        display.textContent = a + b;
    } else if (currentOperator === "-") {
        display.textContent = a - b;
    } else if (currentOperator === "*") {
        display.textContent = a * b;
    }
    else if (currentOperator === "/") {
        if (b === 0) {
            display.textContent = "Error";
        } else {
            display.textContent = a / b;
        }
    }
});
clear.addEventListener("click", function() {

        firstNumber = "";
        currentOperator = "";
        display.textContent = "0";
    });

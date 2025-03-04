const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
const clearBtn = document.getElementById("btn-clear");
const powerBtn = document.getElementById("btn-power");
const percentBtn = document.getElementById("btn-percent");
const toggleThemeBtn = document.getElementById("toggle-theme-btn");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
   currentResultOutput.textContent = result;
   currentCalculationOutput.textContent = text;
}

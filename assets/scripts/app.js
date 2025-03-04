const defultResult = 0; // Starting result value
let currentResult = defultResult;
let logEntries = []; // Array to store calculation logs

// Get number from input field
function getUserNumberInput() {
    return parseFloat(userInput.value);
}

// Show result and calculation on screen
function creatAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

// Save calculation details to log
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

// Main function to calculate based on type
function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' &&
        calculationType !== 'POWER' &&
        calculationType !== 'PERCENT'   
    ) {
        return; // Stop if type is invalid
    }

    if (!enteredNumber) {
        outputResult(currentResult, 'ERROR: Enter a number');
        return;
    }

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    } else if (calculationType === 'POWER') { 
        currentResult = Math.pow(currentResult, enteredNumber);
        mathOperator = '^';
    } else if (calculationType === 'PERCENT') {  
        currentResult = currentResult * (enteredNumber / 100);
        mathOperator = '%';
    }

    creatAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

function power() {
    calculateResult('POWER'); 
}

function percent() {
    calculateResult('PERCENT'); 
}

// Reset everything to start
function clear() {
    const initialResult = currentResult;
    currentResult = defultResult;
    userInput.value = '';
    writeToLog('CLEAR', initialResult, 0, currentResult);
    logEntries = [];
    outputResult(currentResult, 'CLEARED');
    console.clear();
}

// Switch between light and dark mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode'); // Add or remove dark-mode class
    toggleThemeBtn.textContent = 
        document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode'; // Change button text
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clear);
powerBtn.addEventListener("click", power);
percentBtn.addEventListener("click", percent);
toggleThemeBtn.addEventListener("click", toggleTheme);

console.log(""); // Empty log to console
const defultResult = 0;
let currentResult = defultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function creatAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription );
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' &&
        calculationType !== 'CLEAR' &&
        calculationType !== 'POWER' ||
        !enteredNumber 
    ) {
        return;
    }
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if ( calculationType === 'SUBTRACT' ) {
        currentResult -= enteredNumber;
        mathOperator = '-';
    }else if ( calculationType === 'MULTIPLY' ) {
        currentResult *= enteredNumber;
        mathOperator = '*';
    }else if ( calculationType === 'DIVIDE' ) {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }else if ( calculationType === 'CLEAR' ) {
    currentResult = defultResult;
    userInput.value = '';
    mathOperator = 'C';
    outputResult(currentResult, 'CLEARED');
    writeToLog(calculationType, initialResult, 0, currentResult);
        return;
    } else if (calculationType === 'POWER') { 
        currentResult = Math.pow(currentResult, enteredNumber);
        mathOperator = '^';
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

function divide () {
    calculateResult('DIVIDE');
}

function clear() {
    calculateResult('CLEAR');
}
function power() {
    calculateResult('POWER'); }

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clear);
powerBtn.addEventListener("click", power);



console.log("");

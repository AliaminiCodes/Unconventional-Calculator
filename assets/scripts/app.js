const defultResult = 0;
let currentResult = defultResult;
let logEntries = [];
function getUserNumberInput() {
    return parseInt(userInput.value);
}
function creatAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription );
}

function add() {
    const enteredNumber = getUserNumberInput();
    const iniitialResult = currentResult;
    currentResult += enteredNumber;
    creatAndWriteOutput('+', iniitialResult, enteredNumber);
    const logEntry = {
        operation: 'ADD',
        prevResult: iniitialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
     
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const iniitialResult = currentResult;
    currentResult -= enteredNumber;
    creatAndWriteOutput('-', iniitialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const iniitialResult = currentResult;
    currentResult *= enteredNumber;
    creatAndWriteOutput('*', iniitialResult, enteredNumber);
}

function divide () {
    const enteredNumber = getUserNumberInput();
    const iniitialResult = currentResult;
    currentResult /= enteredNumber;
    creatAndWriteOutput('/', iniitialResult, enteredNumber);    
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);


console.log("");

const defultResult = 0;
let currentResult = defultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult,calcDescription );
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult,calcDescription );
}

subtractBtn.addEventListener("click", subtract);
addBtn.addEventListener("click", add);
 


console.log("");

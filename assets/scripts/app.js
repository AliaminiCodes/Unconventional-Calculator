const defultResult = 0;
let currentResult = defultResult;

function add() {
    const calcDescription = `${currentResult} + ${userInput.value}`;
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult,calcDescription );
}



addBtn.addEventListener("click", add);
 
console.log(typeof add);

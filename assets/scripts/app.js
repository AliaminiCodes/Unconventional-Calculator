const defultResult = 0;
let currentResult = defultResult;

function add() {
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, "");
}



addBtn.addEventListener("click", add);
 
console.log(typeof add);

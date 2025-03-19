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
function outputResult(result, text) {currentResultOutput.textContent = result;currentCalculationOutput.textContent = text;}
const defultResult=0;let currentResult=defultResult;let logEntries=[];
function getUserNumberInput(){return parseFloat(userInput.value)}
function creatAndWriteOutput(operator,resultBeforeCalc,calcNumber){const calcDescription=`${resultBeforeCalc} ${operator} ${calcNumber}`;outputResult(currentResult,calcDescription)}
function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){const logEntry={operation:operationIdentifier,prevResult:prevResult,number:operationNumber,result:newResult};logEntries.push(logEntry);console.log(logEntries)}
function calculateResult(calculationType){const enteredNumber=getUserNumberInput();
if(calculationType!=='ADD'&&calculationType!=='SUBTRACT'&&calculationType!=='MULTIPLY'&&calculationType!=='DIVIDE'&&calculationType!=='POWER'&&calculationType!=='PERCENT')return;if(!enteredNumber){outputResult(currentResult,'ERROR: Enter a number');return}const initialResult=currentResult;let mathOperator;if(calculationType==='ADD')currentResult+=enteredNumber,mathOperator='+';else if(calculationType==='SUBTRACT')currentResult-=enteredNumber,mathOperator='-';else if(calculationType==='MULTIPLY')currentResult*=enteredNumber,mathOperator='*';else if(calculationType==='DIVIDE')currentResult/=enteredNumber,mathOperator='/';else if(calculationType==='POWER')currentResult=Math.pow(currentResult,enteredNumber),mathOperator='^';else if(calculationType==='PERCENT')currentResult=currentResult*(enteredNumber/100),mathOperator='%';creatAndWriteOutput(mathOperator,initialResult,enteredNumber);writeToLog(calculationType,initialResult,enteredNumber,currentResult)}
function add(){calculateResult('ADD')}
function subtract(){calculateResult('SUBTRACT')}
function multiply(){calculateResult('MULTIPLY')}
function divide(){calculateResult('DIVIDE')}
function power(){calculateResult('POWER')}
function percent(){calculateResult('PERCENT')}
function clear(){const initialResult=currentResult;currentResult=defultResult;userInput.value='';writeToLog('CLEAR',initialResult,0,currentResult);logEntries=[];outputResult(currentResult,'CLEARED');console.clear()}
function toggleTheme(){document.body.classList.toggle('dark-mode');toggleThemeBtn.textContent=document.body.classList.contains('dark-mode')?'Light Mode':'Dark Mode'}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
clearBtn.addEventListener('click',clear);
powerBtn.addEventListener('click',power);
percentBtn.addEventListener('click',percent);
toggleThemeBtn.addEventListener('click',toggleTheme);
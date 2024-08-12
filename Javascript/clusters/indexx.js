let num1 =  Math.floor(Math.random() * 10) + 1
let num2 =  Math.floor(Math.random() * 10) + 1
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")
function add(){
   addResult= num1 + num2
   sumEl.textContent = "RESULT: " + addResult
}

function subtract(){
    subResult= num1-num2
    sumEl.textContent = "RESULT: " + subResult
}

function divide(){
    divResult = num1/num2
    sumEl.textContent = "RESULT: " + divResult
}

function multiply(){
    mulResult= num1*num2
    sumEl.textContent = "RESULT: " + mulResult
}
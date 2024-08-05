let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")
function add(){
   addResult= num1 + num2
   sumEl.textContent = "Sum: " + addResult
}

function subtract(){
    subResult= num1-num2
    sumEl.textContent = "Sum: " + subResult
}

function divide(){
    divResult = num1/num2
    sumEl.textContent = "Sum: " + divResult
}

function multiply(){
    mulResult= num1*num2
    sumEl.textContent = "Sum: " + mulResult
}
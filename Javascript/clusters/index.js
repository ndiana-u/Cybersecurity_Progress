
let countEl = document.getElementById("count-el")
let count = 0

 function increment(){
 count++
countEl.innerText = count
 }

 function reset(){
     count = 0
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el")

 function save(){
    saveCount =count + "-"
    saveEl.innerText += saveCount
    console.log(count)
}
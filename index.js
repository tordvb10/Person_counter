let countEL = document.getElementById("count")
let count = 0
let saveEL = document.getElementById("save-el")
let first_count = true

function increment(){
    console.log("Button is clicked.")
    count += 1
    countEL.innerText = count
    console.log(count)
}

function save(){
    if (first_count) {
        countStr = count
        first_count = false
    } else {
        countStr =  " - " + count
    }
    saveEL.textContent += countStr
    count = -1
    increment()
}


let count = 0

let incrementEl = document.getElementById("total-counts")
function increment()
{
    count++
    incrementEl.innerText = count
}

let saveEL = document.getElementById("previous-counts")
function save()
{
    saveEL.textContent += " " + count + " - "
    incrementEl.innerText = 0
    count = 0

}


let eraseEl = document.getElementById("previous-counts")
function erase()
{
    eraseEl.innerText = 0
    document.getElementById("previous-counts").innerText = "Previous Counts:"

    //eraseEl.innerText += ""
    //count = 0
}
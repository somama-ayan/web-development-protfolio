/////////////////////////////////////////////
/////////// home ///////////////////////
let homePEl = document.getElementById("home-el-p")
let pointsOfH = 0
function point1()
{
    
    pointsOfH++
    homePEl.innerText = pointsOfH
}
function point2()
{
    
    pointsOfH = pointsOfH + 2
    homePEl.innerText = pointsOfH
}
function point3()
{
    
    pointsOfH = pointsOfH + 3
    homePEl.innerText = pointsOfH
}



//////////////////////////////////
////////// guest /////////////////////////

let guestElP = document.getElementById("guest-el-p")
let pointsOfG = 0
function pointG1()
{
    pointsOfG++
    guestElP.innerText = pointsOfG
}
function pointG2()
{
    
    pointsOfG = pointsOfG + 2
    guestElP.innerText = pointsOfG
}
function pointG3()
{
    
    pointsOfG = pointsOfG + 3
    guestElP.innerText = pointsOfG
}
/////////////////////////////////
function reset()
{   
    pointsOfH = 00
    pointsOfG = 00
    document.getElementById("home-el-p").innerText = "00"
    document.getElementById("guest-el-p").innerText = "00"
}
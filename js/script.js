


function sdf() {
    let cl = document.getElementById("cl")

    document.body.style.background = "#000"
    // cl.innerHTML = 'clicked'


}






let csl = document.getElementById("csl")

csl.addEventListener('click', () => {
    document.body.style.background = "#FFF"
    // document.getElementById('csl').innerHTML = 'clicked'


})



let input = document.getElementById("input")
let clbtn = document.getElementById("clbtn")
let copybtn = document.getElementById("copybtn")
let hext = document.getElementById("hext")

clbtn.addEventListener('click', () => {
    const bgclo = bgcolorcng()
    hext.style.background = bgclo
    input.value = bgclo

})
copybtn.addEventListener('click', () => {
    navigator.clipboard.writeText(input.value)

    document.getElementById('copybtn').innerHTML = 'copied'



    tst.classList.remove("translate-x-full", "opacity-0")
    tst.classList.add("opacity-100");

    setTimeout(() => {
        tst.classList.add("translate-x-full", "opacity-0")
        tst.classList.remove("opacity-100")
    }, 1000)






    setTimeout(() => {
        copybtn.innerHTML = "copy"
    }, 1000)




})

function bgcolorcng() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)


    return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`

}


let text = document.getElementById("text");
let deletes = document.getElementById("deletes");

deletes.addEventListener("click", () => {
    text.remove();

});






// HW ***********************************


let inputs = document.getElementById("inputs")
let startbtn = document.getElementById("startbtn")
let nameMiss = document.getElementById("nameMiss")
let playerOne = document.getElementById("playerOne")
let inputTwo = document.getElementById("inputone")
let giveNumber = document.getElementById("giveNumber")


startbtn.addEventListener("click", () => {

    if (inputs.value == "") {
        nameMiss.removeAttribute("hidden")

    }

    else {
        startPart.style.display = "none"
    }


})


startbtn.addEventListener('click', () => {
    playerOne.removeAttribute("hidden")
})

let countdownsElement = document.getElementById("countdowns");
let increess = document.getElementById("increess");
let decreess = document.getElementById("decreess");

let countdowns = 0;

increess.addEventListener("click", () => {

    countdowns = countdowns + 1;

    countdownsElement.textContent = countdowns;

});


decreess.addEventListener("click", () => {

     
    countdowns = countdowns - 1;
    countdownsElement.textContent = countdowns;

});
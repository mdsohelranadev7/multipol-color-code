


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





let counter = document.getElementById("counter")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let increes = 0



function nad() {

    if (increes >= 5) {
        plus.disabled = true
        plus.style.opacity = '50%'
        plus.classList.add('cursor-not-allowed')
    }

    else {
        plus.disabled = false
        plus.style.opacity = '100%'
        plus.classList.remove('cursor-not-allowed')

    }




    if (increes <= 0) {
        minus.disabled = true
        minus.style.opacity = '50%'
        minus.classList.add('cursor-not-allowed')
    }
    else {
        minus.disabled = false
        minus.style.opacity = '100%'
        minus.classList.remove('cursor-not-allowed')
    }

}

plus.addEventListener('click', () => {

    increes = increes + 1
    counter.textContent = increes
    nad()
})

minus.addEventListener('click', () => {
    increes = increes - 1
    counter.textContent = increes
    nad()


})




let timer = document.getElementById('timer')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let usertime = 15
let deleteinterval ; 
let isRunning = false


function finaltime() {
    let minit = parseInt(usertime / 60, 10)
    let secound = parseInt(usertime % 60, 10)


    // let minits = minit < 10 ? "0" + minit : minit
    // let secounds = secound < 10 ? "0" + secound : secound
    let minits
    if (minit < 10) {
        minits = "0" + minit
    } else {
        minits = minit
    }

    let secounds
    if (secound < 10) {
        secounds = "0" + secound
    } else {
        secounds = secound
    }

    return minits + ":" + secounds

}



function soel() {

    if (isRunning) return

    isRunning = true




     deleteinterval = setInterval(() => {

        usertime--
        timer.textContent = finaltime()

        if (usertime <= 0) {
            clearInterval(deleteinterval)
        }



    }, 1000)
}

start.addEventListener('click', () => {

    soel()
})

stop.addEventListener('click', () => {

    clearInterval(deleteinterval)
     isRunning = false

})










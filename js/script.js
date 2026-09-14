


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





let counter = document.getElementById('counter')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')

let plusbtn = 0




plus.addEventListener('click', () => {
    plusbtn = plusbtn + 1

    counter.textContent = plusbtn
    if (plusbtn >= 10) {
        plus.disabled = true
        plus.style.opacity = "50%"
        plus.classList.add('cursor-not-allowed')
    }
    else {
        plus.disabled = false
        plus.style.opacity = "100%"
        plus.classList.remove('cursor-not-allowed')

    }

    minus.disabled = false;
    minus.style.opacity = "100%";
    minus.classList.remove('cursor-not-allowed');

})


minus.addEventListener('click', () => {
    plusbtn = plusbtn - 1

    counter.textContent = plusbtn
    if (plusbtn <= 0) {
        minus.disabled = true
        minus.style.opacity = "50%"
        minus.classList.add('cursor-not-allowed')
    }
    else {
        minus.disabled = false
        minus.style.opacity = "100%"
        minus.classList.remove('cursor-not-allowed')

    }

    plus.disabled = false
    plus.style.opacity = "100%"
    plus.classList.remove('cursor-not-allowed')


})




// new 


let timer = document.getElementById("timer")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let deleteinterval = null
let usertime = 500  // ✅ 10 সেকেন্ড
let isRunning = false

let user = () => {
    if (isRunning) return

    isRunning = true

    deleteinterval = setInterval(() => {

        if (usertime <= 0) {
            clearInterval(deleteinterval)
            isRunning = false
            timer.textContent = "00:00.00"
            return
        }

        usertime--

        let totalSeconds = parseInt(usertime / 100, 10)
        let mili = parseInt((usertime % 100) / 10, 10)

        let minit = parseInt(totalSeconds / 60, 10)
        let secound = parseInt(totalSeconds % 60, 10)

        let minits = minit < 10 ? "0" + minit : minit
        let secounds = secound < 10 ? "0" + secound : secound
        let milis = mili < 10 ? "0" + mili : mili

        timer.textContent = minits + ":" + secounds + "." + milis

    }, 10)  // ✅ প্রতি 10ms এ update
}

start.addEventListener('click', () => {
    user()
})

stop.addEventListener('click', () => {
    clearInterval(deleteinterval)
    isRunning = false
})
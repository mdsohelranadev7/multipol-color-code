


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


clbtn.addEventListener('click', () => {
    const bgclo = bgcolorcng()
    hext.style.background = bgclo
    
    input.value =bgclo


    copybtn.addEventListener('click',()=>{
        navigator.clipboard.writeText(input.value)
        
    })

    
})

copybtn.addEventListener('click',()=>{

    document.getElementById('copybtn').innerHTML='copied'


    setTimeout(()=>{
copybtn.innerHTML = "copy"
    },1000)
    
})






function bgcolorcng() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue= Math.floor(Math.random() * 255)


    return`#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`

}







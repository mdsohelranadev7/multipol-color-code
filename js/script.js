


function sdf() {
    let cl = document.getElementById("cl")

    document.body.style.background = "#000 "
    cl.innerHTML = 'clicked'

    setTimeout(() => {
        cl.innerHTML = "click";

    }, 1000)

}






let csl = document.getElementById("csl")

csl.addEventListener('click', () => {
    document.body.style.background = "red"
    document.getElementById('csl').innerHTML = 'clicked'


    setTimeout(() => {
        csl.innerHTML = "click";
    }, 1000);


})
    


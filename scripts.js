 
const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const div = document.querySelector(".serviços-mae")

function cliquei(){
    form.style.left = "40%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderform(){
    form.style.left = "-300%"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

function nossoserviço(){
    div.style.visibility = "visible"
    div.style.transform = "translateX(0)"
}

function esconde(){
    div.style.visibility = "hidden"
    div.style.transform = "translateX(0)"
}
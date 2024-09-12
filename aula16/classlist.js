function minhaFuncao(){
    document.querySelector('.minhaDiv').classList.add("classe1","classe2","classe3")
}

function fundoAzul(){
    let elemento = document.querySelector('#style')
    elemento.style.backgroundColor = "blue"
}
function fundoTransp(){
    let elemento = document.querySelector('#style')
    elemento.style.backgroundColor = ''
}

function fontVer(){
    let elemento = document.querySelector('#style')
    elemento.classList.add("fontVer")
}

function fontNormal(){
    let elemento = document.querySelector('#style')
    elemento.classList.remove("fontVer")
}
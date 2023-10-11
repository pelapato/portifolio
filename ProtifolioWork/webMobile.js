let n=document.getElementById("n")
let btn=document.getElementById("btn-mobile")
let body=document.getElementById("b")
let cont =1
function efeito(){
    n.classList.toggle("ativo")
}
function cor(){
    cont+=1
    body.style.background="#e7e7e7"
    if(cont%2==0)body.style.background="white"
}
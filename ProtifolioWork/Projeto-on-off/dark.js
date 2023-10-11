
let fundo=document.getElementById("d")
let bola=document.getElementById("p")
let body=document.getElementById("html")
let click =1
function e(){
    click+=1
    fundo.classList.toggle("dark")
    if(click %2 ==0){
        body.style.background="black"
        console.log("Dark")
    }else{
        body.style.background="white"
        console.log("Light")
    }
}
bola.addEventListener("click",e)
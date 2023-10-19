let loading=document.getElementById("loading")
let contLogo=0
let dialogo=document.getElementById("dialogo")
let x=document.getElementById("x")

let link1=document.getElementById("link1")
let link2=document.getElementById("link2")
let ceta=document.getElementById("ceta")
function cetaClick(){
  console.log("ola")
}
link1.addEventListener("click",cetaClick)
const logotipo=()=>{
  contLogo+=1
  if(contLogo==1){
    setTimeout(()=>{
      loading.classList.add("to-do-List")
      console.log("removeu")
    },5000)
  }
  x.addEventListener('click',()=>{
    dialogo.style.opacity="0"
  })
}
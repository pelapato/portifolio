let loading=document.getElementById("loading")
let contLogo=0
let dialogo=document.getElementById("dialogo")
let x=document.getElementById("x")
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
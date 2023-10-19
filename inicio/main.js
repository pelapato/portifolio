//Loading
let loading=document.getElementById("loading")
let contLogo=0
let dialogo=document.getElementById("dialogo")
let x=document.getElementById("x")

const logotipo = () => {
  contLogo += 1
  if (contLogo == 1) {
    setTimeout(() => {
      loading.classList.add("to-do-List")
      console.log("removeu")
    }, 5000)
  }
  x.addEventListener('click', () => {
    dialogo.style.opacity = "0"
  })
}

//Navegation
let link1=document.querySelector(".link")
let link2=document.querySelector(".link2")
let b=document.querySelector(".navegation")
let ceta=document.querySelector(".ceta")
let ceta1=document.querySelector(".ceta1")
let github=document.querySelector(".navegation-github")

link1.addEventListener("click",()=>{
  b.classList.toggle("navgation-visible")
  ceta.classList.toggle("ceta-rotate")
  github.classList.remove("navegation-visible-github")
  ceta1.classList.remove("ceta-rotate")
})

link2.addEventListener("click",()=>{
  github.classList.toggle("navegation-visible-github")
  ceta1.classList.toggle("ceta-rotate")
  b.classList.remove("navgation-visible")
  ceta.classList.remove("ceta-rotate")
})

window.addEventListener('scroll',()=>{
  console.log("occoreu o evento de scrool!!")
})
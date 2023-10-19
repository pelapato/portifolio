//Navegation
let link1 = document.querySelector(".link")
let link2 = document.querySelector(".link2")
let b = document.querySelector(".navegation")
let ceta = document.querySelector(".ceta")
let ceta1 = document.querySelector(".ceta1")
let github = document.querySelector(".navegation-github")

link1.addEventListener("click", () => {
  b.classList.toggle("navgation-visible")
  ceta.classList.toggle("ceta-rotate")
  github.classList.remove("navegation-visible-github")
  ceta1.classList.remove("ceta-rotate")
})

link2.addEventListener("click", () => {
  github.classList.toggle("navegation-visible-github")
  ceta1.classList.toggle("ceta-rotate")
  b.classList.remove("navgation-visible")
  ceta.classList.remove("ceta-rotate")
})
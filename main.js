let loading=document.getElementById("loading")
let contLogo=0
const logotipo=()=>{
  contLogo+=1
  if(contLogo==1){
    setTimeout(()=>{
      loading.classList.add("to-do-List")
      console.log("removeu")
    },5000)
  }
}
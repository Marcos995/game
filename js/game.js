let body = document.getElementsByTagName("body")[0]
let p = document.getElementsByTagName("p")[0]
reiniciar.addEventListener("click",padrao)
//evento para pular
body.addEventListener("click",pular)
let k
function pular(){
  som_pulo.play()
  mario.classList.add("pulo")
  body.removeEventListener("click",pular)
  k =setTimeout(remover,1000)
  function remover(){
    mario.classList.remove("pulo")
    body.addEventListener("click",pular)
   }
}
let x = 0
//detectar colisão
game()
function game(){
  let canoRight =+getComputedStyle(cano).right.replace("px"," ")
  let marioBottom=+getComputedStyle(mario).bottom.replace("px"," ")
  let marioRight=+getComputedStyle(mario).right.replace("px"," ")
  let canoWidth=+getComputedStyle(cano).width.replace("px"," ")
  p.innerText = canoRight+" "+marioBottom
  let anima = requestAnimationFrame(game)
  if(canoRight>marioRight-canoWidth && canoRight<marioRight && marioBottom<50){
    body.removeEventListener("click",pular)
    mario.classList.remove("pulo")
    cano.style.animation="none"
    cano.style.right=canoRight+"px"
    //mario.style.animation="none"
    mario.style.right=marioRight+"px"
    mario.style.bottom=marioBottom+"px"
    mario.src="assets/mario_game_over.png"
    container.style.display= "flex"
    som_tema.src=""
    clearTimeout(k)
    som_game_over.play()
    body.removeEventListener("click",pular)
    cancelAnimationFrame(anima)
  }
  else{
    x++
    score.innerText = "pontos: "+x
    recorde.innerText="pontuação: "+x
  }
}
setTimeout(tocar,100)
function tocar(){
  som_tema.play()
  som_tema.loop=true
}
function padrao(){
  nuvem.style.animation="none"
  cano.style.right="-40px"
  mario.style.bottom="0px"
  mario.src="assets/mario.gif"
  mario.style.display="none"
  container.style.display="none"
  setTimeout(padrao1,100)
  som_game_over.src=""
}
function padrao1(){
  mario.style.display="block"
  body.addEventListener("click",pular)
  nuvem.style.animation=""
  som_game_over.src="assets/mario_game_over_sound.mp3"
  cano.style.animation=""
  container.display="none;"
  som_tema.src="assets/mario_theme_sound.mp3"
  game()
  tocar()
}
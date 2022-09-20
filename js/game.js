reiniciar.addEventListener("click",game)
let pontos
game()
//reiniciar game
function game(){
  pontos=0
  cano.style.right=cano.style.right
  mario.style.bottom="0px"
  nuvem.style.animation="none"
  mario.style.display="none"
  container.style.display="none"
  mario.src="assets/mario.gif"
  som_game_over.src=""
  setTimeout(game1,100)
}
function game1(){
  mario.style.display="block"
  document.addEventListener("click",pular)
  nuvem.style.animation=""
  cano.style.animation=""
  container.display="none"
  som_tema.src="assets/mario_theme_sound.mp3"
  som_pulo.src="assets/mario_jump_sound.mp3"
  som_game_over.src="assets/mario_game_over_sound.mp3"
  gameLoop()
  tocar()
}
//função recorde
  let c = 0
  let a
  let b
  let r
function recorde1(){
  c++
  if (c==1){
    a = pontos
    r = pontos
  }
  else{
    b = pontos
    if (a-b>0){
    r=a
    }
 else{
   a=b
   r=b
    }
  }
recorde.innerText= "recorde: "+r
}
//detectar colisão
function gameLoop(){
  let canoRight =+getComputedStyle(cano).right.replace("px"," ")
  let marioBottom=+getComputedStyle(mario).bottom.replace("px"," ")
  let marioRight=+getComputedStyle(mario).right.replace("px"," ")
  let canoWidth=+getComputedStyle(cano).width.replace("px"," ")
  let marioWidth=+getComputedStyle(mario).width.replace("px"," ")
  let anima = requestAnimationFrame(gameLoop)
  if(canoRight>marioRight-canoWidth && canoRight<marioRight+marioWidth-10 && marioBottom<50){
    recorde1()
    document.removeEventListener("click",pular)
    mario.classList.remove("pulo")
    cano.style.animation="none"
    cano.style.right=canoRight+"px"
    mario.style.right=marioRight+"px"
    mario.style.bottom=marioBottom+"px"
    mario.src="assets/mario_game_over.png"
    container.style.display= "flex"
    som_tema.src=""
    som_pulo.src=""
    clearTimeout(k)
    som_game_over.play()
    document.removeEventListener("click",pular)
    cancelAnimationFrame(anima)
  }
  else{
    pontos++
    score.innerText = "pontos: "+pontos
  }
}
function tocar(){
  som_tema.play()
  som_tema.loop=true
}
//evento para pular
document.addEventListener("click",pular)
let k
function pular(){
  som_pulo.play()
  mario.classList.add("pulo")
  document.removeEventListener("click",pular)
  k =setTimeout(remover,1000)
  function remover(){
    mario.classList.remove("pulo")
    document.addEventListener("click",pular)
   }
}
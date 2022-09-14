let body = document.getElementsByTagName("body")[0]
let p = document.getElementsByTagName("p")[0]
setTimeout(tocar,100)
function tocar(){
  som_tema.loop=true
  som_tema.play()
  console.log(1)
}
//evento para pular
body.addEventListener("click",pular)
function pular(){
  som_pulo.play()
  mario.classList.add("pulo")
  body.removeEventListener("click",pular)
  setTimeout(remover,1000)
  function remover(){
    mario.classList.remove("pulo")
    body.addEventListener("click",pular)
   }
}
//detectar colisão
setInterval(game,10)
function game(){
  let canoRight =+getComputedStyle(cano).right.replace("px"," ")
  let marioBottom=+getComputedStyle(mario).bottom.replace("px"," ")
  let marioRight=+getComputedStyle(mario).right.replace("px"," ")
  let canoWidth=+getComputedStyle(cano).width.replace("px"," ")
  marioGO.style.bottom=marioBottom+"px"
  let marioGOBottom =+getComputedStyle(marioGO).bottom.replace("px"," ")
  p.innerText = canoRight+" "+marioBottom
  if(canoRight>marioRight-canoWidth && canoRight<marioRight && marioGOBottom<50){
    p.innerText =canoRight+" "+marioBottom+" bateu"
    cano.style.animation="none"
    cano.style.right=canoRight+"px"
    mario.style.animation="none"
    mario.style.right=marioRight+"px"
    container.style.display= "flex"
    mario.style.bottom=marioBottom+"px"
    marioGO.style.bottom=marioBottom+"px"
    marioGO.style.display="block"
    mario.style.display="none"
    body.removeEventListener("click",pular)
    som_tema.src=""
    som_game_over.play()
    som_game_over.addEventListener("ended",som)
    function som(){
      som_game_over.src=""
    }
    }
   else{
    x++
    score.innerText = "pontos: "+x
    recorde.innerText="pontuação: "+x
  }
}
let x = 0
/*setInterval(teste,500)
function teste(){
  console.log(getComputedStyle(mario1).bottom)
}*/
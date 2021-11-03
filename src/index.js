
import Game from "./game"

//webpack --watch --mode=development
// document.addEventListener("DOMContentLoaded", () => {
  
const canvas1 = document.getElementById("canvas1");
  const ctx = canvas1.getContext('2d');
 
  const canvas2 = document.getElementById("canvas2");
  const ctx2 = canvas2.getContext('2d');
  const newGame = new Game(canvas2, ctx2)


  window.addEventListener('resize', function () {
    canvas1.width = window.innerWidth
    canvas1.height = window.innerHeight
    ctx2.fillStyle = 'white'
    ctx2.fillRect(canvas2.width, canvas2.height, 700, 700)
    newGame.player.draw(ctx2)
  })


document.addEventListener('keydown', (e) => {
  let dir = newGame.player.moves[e.key]
  if ((newGame.player.x + dir[0]) < canvas2.width && newGame.player.x +dir[0] > 0 && newGame.player.y + dir[1] < canvas2.height){
    if (e.key === 'w') {
    newGame.player.x = newGame.player.x += dir[0]
    newGame.player.y = newGame.player.y += dir[1]
    newGame.player.spriteX = 1
    newGame.player.spriteY = 0
    } else if (e.key === 'a') {
      newGame.player.x = newGame.player.x += dir[0]
      newGame.player.y = newGame.player.y += dir[1]
      newGame.player.spriteY = 2
      newGame.player.spriteX = 1
    } else if (e.key === 'd') {
      newGame.player.x = newGame.player.x += dir[0]
      newGame.player.y = newGame.player.y += dir[1]
      newGame.player.spriteY = 1
      newGame.player.spriteX = 1
      
    } else if (e.key === 's') {
      newGame.player.x = newGame.player.x += dir[0]
      newGame.player.y = newGame.player.y += dir[1]
      newGame.player.spriteY = 3
      newGame.player.spriteX = 1
    }
  }

})

document.addEventListener('keyup', (e) => {
  newGame.player.spriteX = 0
  // newGame.player.spriteY = 0

})


function clearOld () {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height)
  // ctx2.fillStyle = 'white'
  // console.log(newGame.obstacleInt.vel)
  newGame.levelUp(canvas2)
  newGame.handleObstacles(newGame.cars, ctx2, canvas2)
  newGame.handleObstacles(newGame.logs, ctx2, canvas2)
  newGame.player.draw(ctx2)
  requestAnimationFrame(clearOld)
}
clearOld()




// })









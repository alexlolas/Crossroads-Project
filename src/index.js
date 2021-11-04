
import Game from "./game"

//webpack --watch --mode=development
// document.addEventListener("DOMContentLoaded", () => {
  
const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext('2d');

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext('2d');
  
const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext('2d');

const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas3.getContext('2d');
const newGame = new Game(canvas2, ctx2)
 
  // ctx3.fillStyle = 'white'
  // ctx3.fillRect(0, 150, 250, 300)
 
  
function gameState() {
  ctx3.fillStyle = 'black'
  ctx3.font = '24px Courier'
  ctx3.fillText('Lives:', 10, 180)
  ctx3.fillText(newGame.numLives, 120, 180)
  ctx3.fillText('Level:', 10, 100)
  ctx3.fillText(newGame.level, 120, 100)
  ctx3.fillText(newGame.cars[0].vel, 180, 260)
  ctx3.fillText('Game Speed:', 10, 260)

}

function instructions() {
  ctx3.fillStyle = 'black'
  ctx3.font = '24px Courier'
  ctx3.fillText("Instructions", 1047, 100)
  ctx3.font = '16px Courier'
  ctx3.fillText("Make it across the street while", 982, 135 )
  ctx3.fillText("avoiding the obstacles! Once you", 982, 155 )
  ctx3.fillText("reach the top you swill spawn at", 982, 175 )
  ctx3.fillText("the bottom on the next level.", 982, 195 )
  ctx3.fillText("Each Level the game speed", 982, 215 )
  ctx3.fillText("increases. See how far you can", 982, 235 )
  ctx3.fillText("get with three lives!", 982, 255 )
  ctx3.font = '24px Courier'
  ctx3.fillText("Controls", 1070, 440)
  ctx3.font = '18px Courier'
  ctx3.fillText("-'W' to jump forward", 1000, 475)
  ctx3.fillText("-'A' to jump left", 1000, 505)
  ctx3.fillText("-'S' to jump backwards", 1000, 535)
  ctx3.fillText("-'D' to jump right", 1000, 565)  
}

function title() {
  ctx4.fillStyle = 'white'
  ctx4.font = '24px Courier'
  ctx4.fillText("CROSSROADS", 300, 0)
}

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
})


function clearOld () {
  ctx.clearRect(0, 0, canvas2.width, canvas2.height)
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height)
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height)
  gameState()
  instructions()
  title()
  newGame.levelUp(canvas2)
  newGame.handleObstacles(newGame.cars, ctx2, canvas2)
  newGame.handleObstacles(newGame.logs, ctx2, canvas2)
  newGame.player.draw(ctx2)
  newGame.gameOver()
  requestAnimationFrame(clearOld)
}
clearOld()




// })









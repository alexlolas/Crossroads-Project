// import Player from "./player.js"
import Game from "./game"
import Obstacle from "./obstacle"

// import BoardView from "./board_view.js"
//webpack --watch --mode=development
// make sure this works and then try to condense code after
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
  if ((newGame.player.x + dir[0]) < canvas2.width && newGame.player.x +dir[0] > 0 && newGame.player.y + dir[1] < canvas2.height && newGame.player.y + dir[1] > 0) {
    newGame.player.x = newGame.player.x += dir[0]
    newGame.player.y = newGame.player.y += dir[1]
  }

})

console.log()


function clearOld () {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height)
  ctx2.fillStyle = 'white'
  // ctx2.fillRect(canvas2.width, canvas2.height, 700, 700)
  newGame.player.draw(ctx2)
  // obstacles(arr, canvas2)
  // console.log(newGame.arr)
  newGame.obstacleInt.handleObstacles(newGame.values, ctx2, canvas2)
  requestAnimationFrame(clearOld)
}
clearOld()




// })









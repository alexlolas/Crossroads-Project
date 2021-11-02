import Player from "./player.js"
// import BoardView from "./board_view.js"
//webpack --watch --mode=development
// make sure this works and then try to condense code after
document.addEventListener("DOMContentLoaded", () => {
  
const canvas1 = document.getElementById("canvas1");
  const ctx = canvas1.getContext('2d');
  //  const newBoard = new BoardView(canvas, ctx)
  const canvas2 = document.getElementById("canvas2");
  const ctx2 = canvas2.getContext('2d');
  const newPlayer = new Player(canvas2)
  canvas1.width = window.innerWidth
  canvas1.height = window.innerHeight

  newPlayer.draw(ctx2)
// console.log(canvas2)
  ctx2.fillStyle = 'white'
  
  ctx2.fillRect(canvas2.width, canvas2.height, 700, 700 )



  window.addEventListener('resize', function () {
    canvas1.width = window.innerWidth
    canvas1.height = window.innerHeight
    ctx2.fillStyle = 'white'
    ctx2.fillRect(canvas2.width, canvas2.height, 700, 700)
    newPlayer.draw(ctx2)
  })




document.addEventListener('keydown', (e) => {
  let dir = newPlayer.moves[e.key]
  console.log(dir)
  newPlayer.x += dir[0]
  newPlayer.y += dir[1]
})

// document.addEventListener('keyup', (e) => {
//   let dir = moves[e.code]
//   newPlayer.pos[0] += 0
//   newPlayer.pos[1] += 0
// })

function clearOld () {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height)
  ctx2.fillStyle = 'white'
  ctx2.fillRect(canvas2.width, canvas2.height, 700, 700)
  newPlayer.draw(ctx2)
  requestAnimationFrame(clearOld)
}
clearOld()



})









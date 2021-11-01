import Player from "./player.js"
// import BoardView from "./board_view.js"
//webpack --watch --mode=development
// make sure this works and then try to condense code after
// document.addEventListener("DOMContentLoaded", () => {
  

const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext('2d');
  //  const newBoard = new BoardView(canvas, ctx)
  
  const newPlayer = new Player()
  
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  ctx.fillStyle = 'white'
  ctx.fillRect(370, 44, 700, 701)
  newPlayer.draw(ctx)



  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white'
    ctx.fillRect(370, 44, 700, 701)
    newPlayer.draw(ctx)
  })




document.addEventListener('keydown', (e) => {
  let dir = newPlayer.moves[e.key]
  newPlayer.pos[0] += dir[0]
  newPlayer.pos[1] += dir[1]
})

// document.addEventListener('keyup', (e) => {
//   let dir = moves[e.code]
//   newPlayer.pos[0] += 0
//   newPlayer.pos[1] += 0
// })

function clearOld () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'white'
  ctx.fillRect((canvas.width - 700)/2, (canvas.height - 701) / 2, 700, 701)
  newPlayer.draw(ctx, 'red')
  requestAnimationFrame(clearOld)
}
clearOld()



// })









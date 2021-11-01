import Player from "./player.js"
// import BoardView from "./board_view.js"
//webpack --watch --mode=development
// make sure this works and then try to condense code after
// document.addEventListener("DOMContentLoaded", () => {
  

const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext('2d');
  //  const newBoard = new BoardView(canvas, ctx)
  const newPlayer = new Player({})
 
  
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


const moves = {
  w: [0, -3],
  a: [-3, 0],
  s: [0, 3],
  d: [3, 0],
  
};

document.addEventListener('keydown', (e) => {
  console.log(newPlayer.pos)
  console.log(e.key)
  let dir = moves[e.key]
  console.log(dir)
  let newX = newPlayer.pos[0] += dir[0]
  let newY = newPlayer.pos[1] += dir[1]
  newPlayer.delete
  newPlayer.pos = [newX, newY]
  newPlayer.draw(ctx)

})

// document.addEventListener('keyup', (e) => {
//   let dir = moves[e.code]
//   newPlayer.pos[0] += 0
//   newPlayer.pos[1] += 0
// })

function clearOld () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'white'
  ctx.fillRect(370, 44, 700, 701)
  newPlayer.draw(ctx)
  requestAnimationFrame(clearOld)
}
clearOld()



// })









import Player from "./player.js"
// import BoardView from "./board_view.js"
//webpack --watch --mode=development
// make sure this works and then try to condense code after
// document.addEventListener("DOMContentLoaded", () => {
  

const canvas = document.getElementById("game-canvas");
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



// })









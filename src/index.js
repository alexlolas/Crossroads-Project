import Player from "./player.js"
//webpack --watch --mode=development

// document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext('2d');
  const newPlayer = new Player({})
  
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

ctx.fillStyle = 'white'
ctx.fillRect(10, 20, 150, 50)
newPlayer.draw(ctx)
  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white'
    ctx.fillRect(10, 20, 150, 50)
    newPlayer.draw(ctx)
  })



// })









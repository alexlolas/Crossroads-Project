
  const BOARD = {
    width: 370,
    margin: 44,
    center: 700,
    length: 701
  }
export default class BoardView {
  constructor (canvas, ctx) {
    this.width = BOARD.width
    this.margin = BOARD.margin
    this.center = BOARD.center
    this.length = BOARD.length
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  
  drawBoard(ctx, width, margin, center, length) {
    ctx.fillStyle = 'white'
    fillRect(width, margin, center, length)
  }
}
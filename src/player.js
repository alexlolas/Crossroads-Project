

const DEFAULTS = {
    color: "green",
    width: 25,
    height: 25,
  }
export default class Player {
  
  constructor(canvas2) {
    this.color = DEFAULTS.color;
    this.width = DEFAULTS.width;
    this.height = DEFAULTS.height;
    this.x = (canvas2.width - this.width) / 2
    this.y = (canvas2.height - this.height) - 5
     this.moves = {
        w: [0, -43],
        a: [-43, 0],
        s: [0, 43],
        d: [43, 0],

      };
  }
  
  draw(ctx2) {
    ctx2.fillStyle = this.color
    ctx2.fillRect(this.x, this.y, this.width, this.height)
    }

    
  

  }
  
  

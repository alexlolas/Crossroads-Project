

const DEFAULTS = {
    color: "green",
    width: 20,
    height: 20,
  }
export default class Player {
  
  constructor(canvas2) {
    this.color = DEFAULTS.color;
    this.width = DEFAULTS.width;
    this.height = DEFAULTS.height;
    this.x = (canvas2.width - this.width) / 2
    this.y = (canvas2.height - this.height) - 20
     this.moves = {
        w: [0, -80],
        a: [-80, 0],
        s: [0, 80],
        d: [80, 0],

      };
  }
  
  draw(ctx2) {
    ctx2.fillStyle = this.color
    ctx2.fillRect(this.x, this.y, this.width, this.height)
    }

    
  

  }
  
  

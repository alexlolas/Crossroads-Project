

const DEFAULTS = {
    color: "red",
    width: 50,
    height: 50,
    pos: [700, 700],
    vel: [0, 0]
  }
export default class Player {
  
  constructor() {
    this.color = DEFAULTS.color;
    this.width = DEFAULTS.width;
    this.height = DEFAULTS.height;
    this.pos = DEFAULTS.pos;
    this.vel = DEFAULTS.vel
     this.moves = {
        w: [0, -80],
        a: [-80, 0],
        s: [0, 80],
        d: [80, 0],

      };
  }
  
  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.pos[0],this.pos[1], this.width, this.height)
    }

    
  

  }
  
  

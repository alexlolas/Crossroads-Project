

const DEFAULTS = {
    color: "red",
    radius: 6,
    pos: [720, 722],
    vel: [0, 0]
  }
export default class Player {
  
  constructor() {
    this.color = DEFAULTS.color;
    this.radius = DEFAULTS.radius;
    this.pos = DEFAULTS.pos;
    this.vel = DEFAULTS.vel
  }
  
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
      );
      ctx.fill();
    }


  

  }
  
  

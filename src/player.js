
const FROG = new Image()
FROG.src = 'frog.png'

const DEFAULTS = {
    color: "green",
    width: 26,
    height: 26,
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
      this.spriteX = 0
      this.spriteY = 0
  }
  
  draw(ctx2) {
 
    ctx2.drawImage(FROG, this.spriteX * 250, this.spriteY * 250, 250, 250, this.x - 26, this.y - 26, this.width * 3, this.height * 3 )
    }

    
  

  }
  
  

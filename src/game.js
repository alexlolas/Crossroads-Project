import Player from "./player.js"
import Obstacle from "./obstacle.js"

export default class Game {
  constructor(canvas2) {
    this.player = new Player(canvas2);
    this.obstacleInt = new Obstacle();
    this.values = this.obstacleInt.obstacles(canvas2);
    this.speed = .5
  }

//  moveObject (canvas) {
//     this.x += this.vel * this.speed
//     if (this.speed > 0) {
//     if (this.x > canvas.width + this.width) {
//       this.x = 0 - this.width
//     } 
//     }else {
//       if (this.x < 0 - this.width) {
//         this.x = canvas.width
//       }
//     } 
//   }

  handleObstacles(arr, ctx2, canvas) {
    //handles moving objects and checks collisons
    for (let i = 0; i < arr.length; i++) {
      arr[i].moveObject(canvas);
      arr[i].draw(ctx2);
    }

    for (let i = 0; i < arr.length; i++) {
      if (this.collisionTest(this.player, arr[i])) {
        this.player.x = (canvas.width - this.player.width) / 2
        this.player.y = (canvas.height - this.player.height) - 5
      }
    }
  }

  collisionTest(player, obstacle) {
    return !( player.x > obstacle.x + obstacle.width ||
      player.x + player.width < obstacle.x ||
      player.y > obstacle.y + obstacle.height ||
      player.y + player.height < obstacle.y)
  }

  levelUp(canvas) {
    if (this.player.y <= 20) {
      this.player.x = (canvas.width - this.player.width) / 2
      this.player.y = (canvas.height - this.player.height) - 5
        for (let i = 0; i < this.values.length; i++) {
          this.values[i].vel += .5
        }
    }
   
  }
    

  
  }

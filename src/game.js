import Player from "./player.js"
import Obstacle from "./obstacle.js"

export default class Game {
  constructor(canvas2, ctx) {
    this.player = new Player(canvas2)
    this.obstacleInt = new Obstacle()
  
    this.values = this.obstacleInt.obstacles(canvas2)
    console.log(this.values)
    console.log(this.player)
    
    // this.obstacleInt.handleObstacles(this.values, ctx)
  }
  handleObstacles(arr, ctx2, canvas) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].moveObject(canvas)
      arr[i].draw(ctx2)
    }

    for (let i = 0; i < arr.length; i++) {
      if (this.collisionTest(this.player, arr[i])) {
        console.log(this.player.x)
        this.player.x = (canvas.width - this.player.width) / 2
        this.player.y = (canvas.height - this.player.height) - 5
        this.player.draw(ctx2)
      }
    }
  }

  collisionTest(player, obstacle) {
    return !( player.x > obstacle.x + obstacle.width ||
      player.x + player.width < obstacle.x ||
      player.y > obstacle.y + obstacle.height ||
      player.y + player.height < obstacle.y)
  }

  levelUp() {

  }
    

  
  }

import Player from "./player.js"
import Obstacle from "./obstacle.js"

export default class Game {
  constructor(canvas2, ctx) {
    this.player = new Player(canvas2)
    this.obstacleInt = new Obstacle()
  
    this.values = this.obstacleInt.obstacles(canvas2)
    
    // this.obstacleInt.handleObstacles(this.values, ctx)
  }
  // handleObstacles(arr, ctx2, canvas) {
  //   for (let i = 0; i < arr.length; i++) {
  //     arr[i].moveObject(canvas)
  //     arr[i].draw(ctx2)
  //   }
  // }
    

  
  }

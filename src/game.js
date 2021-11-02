import Player from "./player.js"
import Obstacle from "./obstacle.js"

export default class Game {
  constructor(canvas2, ctx) {
    this.player = new Player(canvas2)
    this.obstacleInt = new Obstacle()
  
    this.values = this.obstacleInt.obstacles(canvas2)
    
    // this.obstacleInt.handleObstacles(this.values, ctx)
   
    
  }

  
  }

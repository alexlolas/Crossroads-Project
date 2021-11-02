const OBSTACLES = {
  height: 50,
  width: 50,
  color: 'red',
  vel: 1,
  speed: 2
}


export default class Obstacle {
  // constructor(canvas2) {
   
  //   this.height = OBSTACLES.height;
  //   this.width = OBSTACLES.width;
  //   this.color = OBSTACLES.color;
  //   this.vel = OBSTACLES.vel;
  //   this.x = canvas2.width 
  //   this.y = canvas2.height - this.height - 90;
  //   this.speed = OBSTACLES.speed
  //   this.obstacleArr = []
  // }

  constructor(x, y, width, height, speed, canvas2) {

    this.x = x;
    this.y = y
    this.width = width
    this.height = height
    this.speed = speed
    this.obstacleArr = []
  }

  moveObject () {
    this.x += this.vel * this.speed
  }

  draw(ctx2) {
    ctx2.fillStyle = 'red'
    ctx2.fillRect(this.x, this.y, this.width, this.height)
    
  }

  obstacles(canvas2){
    for (let i = 0; i < 2; i++) {
      let x = i * 350
      this.obstacleArr.push(new Obstacle(x, canvas2.height - 50 * 2 - 20, 50, 50, 1)) 

      
    }
  }

  handleObstacles(ctx2) {
    for (let i = 0; i < this.obstacleArr.length; i++) {
      this.obstacleArr[i].moveObject()
      this.obstacleArr[i].draw(ctx2)
    }
  }
  


}
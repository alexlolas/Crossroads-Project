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

  constructor(x, y, width, height, speed, vel) {
    this.y = y
    this.x = x;
    this.width = width
    this.height = height
    this.speed = speed
    this.vel = vel
  }

  moveObject (canvas) {
    this.x += this.vel * this.speed
    console.log(this.x)
    if (this.speed > 0) {
    if (this.x > canvas.width + this.width) {
      this.x = 0 - this.width
    }
  }
    
  }

  draw(ctx2) {
    ctx2.fillStyle = 'red'
    ctx2.fillRect(this.x, this.y, this.width, this.height)
    
  }

  obstacles(canvas2){
    let arrs = []
   for (let i = 0; i < 2; i++) {
      let x = i * 350;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 50 * 2 - 20, 50, 50, 2, 1))
      
      
    }
    
    return arrs
  }



  handleObstacles(arr, ctx2, canvas) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].moveObject(canvas)
      arr[i].draw(ctx2)
    }
  }
  


}
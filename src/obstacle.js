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
    if (this.speed > 0) {
    if (this.x > canvas.width + this.width) {
      this.x = 0 - this.width
    } 
    }else {
      if (this.x < 0 - this.width) {
        this.x = canvas.width
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
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 55 * 2 - 10, 100, 65, 1, .5))
      
      
    }

    for (let i = 0; i < 2; i++) {
      let x = i * 300;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 55 * 3 - 17, 100, 65, -1, .5))


    }
    
    for (let i = 0; i < 2; i++) {
      let x = i * 250;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 57 * 4 - 20, 100, 65, 1, .5))


    }

    for (let i = 0; i < 2; i++) {
      let x = i * 400;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 65 * 5 - 40, 100, 65, -1, .5))


    }

    for (let i = 0; i < 2; i++) {
      let x = i * 375;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 65 * 8 - 50, 150, 65, 1, .5))


    }

    for (let i = 0; i < 3; i++) {
      let x = i * 250;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 66 * 9 - 50, 100, 65, -1, .5))


    }
    return arrs
  }



  // handleObstacles(arr, ctx2, canvas) {
  //   for (let i = 0; i < arr.length; i++) {
  //     arr[i].moveObject(canvas)
  //     arr[i].draw(ctx2)
  //   }
  // }
  


}
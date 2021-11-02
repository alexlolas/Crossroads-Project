
export default class Obstacle {

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
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 57 * 2 - 10, 100, 43, 1, .5))   
    }

    for (let i = 0; i < 2; i++) {
      let x = i * 550;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 52 * 3 - 17, 300, 43, -1, .5))
    }
    
    for (let i = 0; i < 2; i++) {
      let x = i * 250;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 54 * 5 - 20, 100, 43, 1, .5))
    }

    for (let i = 0; i < 2; i++) {
      let x = i * 400;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 59 * 5 - 40, 100, 43, -1, .5))
    }

    for (let i = 0; i < 2; i++) {
      let x = i * 375;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 61 * 6 - 50, 150, 35, 1, .5))
    }

    for (let i = 0; i < 3; i++) {
      let x = i * 250;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 59 * 7 - 49, 150, 35, -1, .5))
    }

    for (let i = 0; i < 2; i++) {
      let x = i * 350;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 62 * 9 - 40, 100, 40, 1, .5))
    }

    for (let i = 0; i < 2; i++) {
      let x = i * 500;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 60 * 10 - 42, 300, 40, -1, .5))
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

const CARS = new Image()
CARS.src = 'cars.png'

const LOG = new Image()
LOG.src = 'log.png'

const TRAIN = new Image() 
TRAIN.src = 'train.jpg'
export default class Obstacle {
  constructor(x, y, width, height, speed, vel, type) {
    this.y = y
    this.x = x;
    this.width = width
    this.height = height
    this.speed = speed
    this.vel = vel
    this.type = type
    this.randCar = (Math.floor(Math.random() * 3))
    this.reverse = 0
  }

  moveObject (canvas) {
    this.x += this.vel * this.speed
    if (this.speed > 0) {
    if (this.x > canvas.width + this.width) {
      this.x = 0 - this.width
    } 
    }else {
      if (this.x < 0 - this.width) {
        this.reverse += 1
        this.x = canvas.width
      }
    } 
  }

  draw(ctx2) {
    if (this.speed < 0) {
      this.reverse = 1
    }
    if (this.type === 'car' || this.type === 'train') {
    ctx2.drawImage(CARS,  this.reverse * 160,  this.randCar * 80, 160, 80, this.x,
      this.y, this.width, this.height)
    } else if (this.type === 'log') {
      ctx2.drawImage(LOG, 0, 0, 160, 62, this.x,
        this.y, this.width, this.height)
     } 
  }

  obstacles(canvas2){
    let arrs = []
   for (let i = 0; i < 2; i++) {
      let x = i * 350;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 60 * 2 - 10, 135, 50, 1, .5, 'car'))   
    }

    for (let i = 0; i < 2; i++) {
      let x = i * 550;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 52 * 3 - 17, 75, 43, -1, .5, 'train'))
    }
    
    for (let i = 0; i < 2; i++) {
      let x = i * 250;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 55 * 5 - 19, 135, 50, 1, .5, 'car'))
    }

    for (let i = 0; i < 2; i++) {
      let x = i * 400;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 60 * 5 - 40, 135, 50, -1, .5, 'car'))
    }

    for (let i = 0; i < 2; i++) {
      let x = i * 375;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 62 * 6 - 56, 150, 40, 1, .5, 'log'))
    }

    for (let i = 0; i < 3; i++) {
      let x = i * 250;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 60 * 7 - 50, 150, 40, -1, .5, 'log'))
    }

    for (let i = 0; i < 2; i++) {
      let x = i * 350;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 62 * 9 - 48, 140, 50, 1, .5, 'car'))
    }

    for (let i = 0; i < 2; i++) {
      let x = i * 500;
      arrs = arrs.concat(new Obstacle(x, canvas2.height - 60 * 10 - 42, 300, 40, -1, .5, 'train'))
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
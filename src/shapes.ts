import * as PIXI from 'pixi.js';


class Shape{
  color: number;
  coordX: number;
  coordY: number;
  stage:  PIXI.Container
  shape = new PIXI.Graphics();
  constructor(color: number, coordX: number, coordY: number =-50){
    this.color = color;
    this.coordX = coordX;
    this.coordY = coordY;
    this.shape.lineStyle(0);
    this.shape.interactive = true; 
    this.shape.buttonMode = true;
    // this.shape.on('click',(e)=>{
    //   console.log(e)
    //   // e.stopPropagation();
    //   this.destroy(); 
    // });
    // this.shape.on('tap', this.destroy.bind(this));
    this.shape.beginFill(color, 1); 
  }

  draw():PIXI.Graphics{
    return this.shape
  }

  destroy():void{
    this.shape.destroy()
  }
}

class Circle extends Shape{
  radius: number;
  constructor(color: number, coordX: number, coordY: number =-50){
    super(color, coordX, coordY)
    this.radius = 50;
    this.shape.drawCircle(this.coordX,  this.coordY, this.radius)
    this.shape.endFill(); 
  };
}
class Ellipse extends Shape{
  width: number;
  height: number;
  constructor(color: number, coordX: number, coordY: number =-50){
    super(color, coordX, coordY)
    this.width = 70;
    this.height = 50;
    this.shape.drawEllipse(this.coordX,  this.coordY, this.width, this.height);
    this.shape.endFill(); 
  };
}

class Triangle extends Shape{
  height: number;
  constructor(color: number, coordX: number, coordY: number =-50){
    super(color, coordX, coordY)
    this.height = 65;
    this.shape.drawStar(this.coordX,  this.coordY, 3, this.height);
    this.shape.endFill(); 
  };
}

class Square extends Shape{
  height: number;
  constructor(color: number, coordX: number, coordY: number =-100){
    super(color, coordX, coordY)
    this.height = 100;
    this.shape.drawRect(this.coordX-50,  this.coordY-50, this.height, this.height);
    this.shape.endFill(); 
  };
}

class Star extends Shape{
  height: number;
  constructor(color: number, coordX: number, coordY: number =-50){
    super(color, coordX, coordY)
    this.height = 65;
    this.shape.drawStar(this.coordX, this.coordY, 5, this.height);
    this.shape.endFill(); 
  };
}

class Pentagon extends Shape{
  height: number;
  constructor(color: number, coordX: number, coordY: number =-50){
    super(color, coordX, coordY)
    this.height = 60;
    this.shape.drawStar(this.coordX, this.coordY, 5, this.height, 0.8 * this.height);
    this.shape.endFill(); 
  };
}

class Hexagon extends Shape{
  height: number;
  constructor(color: number, coordX: number, coordY: number =-50){
    super(color, coordX, coordY)
    this.height = 50;
    this.shape.drawStar(this.coordX, this.coordY, 3, this.height, this.height);
    this.shape.endFill(); 
  };
}

const shapes = [Circle, Ellipse, Triangle, Square, Star, Pentagon, Hexagon]

export default shapes;

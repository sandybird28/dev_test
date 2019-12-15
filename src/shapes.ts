import * as PIXI from 'pixi.js';

class Shape{
  color: number;
  shape = new PIXI.Graphics();
  constructor(color: number){
    this.color = color
    this.shape.lineStyle(0);
    this.shape.interactive = true; 
    this.shape.buttonMode = true;
    this.shape.beginFill(color, 1); 
  }
  draw(){
    return this.shape
  }
}

class Circle extends Shape{
  radius: number;
  coordX: number;
  coordY: number;
  constructor(color: number, coordX: number, coordY: number =-50){
    super(color)
    this.radius = 50;
    this.coordX = coordX;
    this.coordY = coordY;
    this.shape.drawCircle(this.coordX,  this.coordY, this.radius)
    this.shape.endFill(); 
  };
}
class Ellipse extends Shape{
  width: number;
  height: number;
  coordX: number;
  coordY: number;
  constructor(color: number, coordX: number, coordY: number =-50){
    super(color)
    this.width = 70;
    this.height = 50;
    this.coordX = coordX;
    this.coordY = coordY;
    this.shape.drawEllipse(this.coordX,  this.coordY, this.width, this.height);
    this.shape.endFill(); 
  };
}

class Triangle extends Shape{
  height: number;
  coordX: number;
  coordY: number;
  constructor(color: number, coordX: number, coordY: number =-50){
    super(color)
    this.height = 65;
    this.coordX = coordX;
    this.coordY = coordY;
    this.shape.drawStar(this.coordX,  this.coordY, 3, this.height);
    this.shape.endFill(); 
  };
}

class Square extends Shape{
  height: number;
  coordX: number;
  coordY: number;
  constructor(color: number, coordX: number, coordY: number =-100){
    super(color)
    this.height = 100;
    this.coordX = coordX;
    this.coordY = coordY;
    this.shape.drawRect(this.coordX-50,  this.coordY-50, this.height, this.height);
    this.shape.endFill(); 
  };
}

class Star extends Shape{
  height: number;
  coordX: number;
  coordY: number;
  constructor(color: number, coordX: number, coordY: number =-50){
    super(color)
    this.height = 65;
    this.coordX = coordX;
    this.coordY = coordY;
    this.shape.drawStar(this.coordX, this.coordY, 5, this.height);
    this.shape.endFill(); 
  };
}

class Pentagon extends Shape{
  height: number;
  coordX: number;
  coordY: number;
  constructor(color: number, coordX: number, coordY: number =-50){
    super(color)
    this.height = 65;
    this.coordX = coordX;
    this.coordY = coordY;
    this.shape.drawStar(this.coordX, this.coordY, 5, this.height, 0.8 * this.height);
    this.shape.endFill(); 
  };
}

class Hexagon extends Shape{
  height: number;
  coordX: number;
  coordY: number;
  constructor(color: number, coordX: number, coordY: number =-50){
    super(color)
    this.height = 65;
    this.coordX = coordX;
    this.coordY = coordY;
    this.shape.drawStar(this.coordX, this.coordY, 3, this.height, this.height);
    this.shape.endFill(); 
  };
}

const shapes = [Circle, Ellipse, Triangle, Square, Star, Pentagon, Hexagon]
export default shapes;

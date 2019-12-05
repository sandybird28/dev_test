import * as PIXI from 'pixi.js';
import { deleteShape } from './index'

function drawCircle(color,coordX, coordY=-50){
  const radius = 50;
  const circle = new PIXI.Graphics(); 
  circle.lineStyle(0);
  circle.beginFill(color, 1); 
  circle.drawCircle(coordX,  coordY, radius);
  circle.endFill(); 
  circle.interactive = true; 
  circle.buttonMode = true;
  circle.on('click',deleteShape);
  return circle
}

function drawEllipse(color,coordX, coordY=-50){
  const width = 70;
  const height = 50; 
  const ellipse = new PIXI.Graphics(); 
  ellipse.lineStyle(0);
  ellipse.beginFill(color, 1);
  ellipse.drawEllipse(coordX,  coordY, width, height);
  ellipse.endFill();
  ellipse.interactive = true; 
  ellipse.buttonMode = true; 
  ellipse.on('click',deleteShape); 
  return ellipse
}

function drawTriangle(color,coordX, coordY=-50 ){
  const triangle = new PIXI.Graphics();
  triangle.x = coordX-50;
  triangle.y = coordY-50;
  triangle.beginFill(color, 1);
  triangle.lineStyle(0);
  triangle.moveTo(100, 0);
  triangle.lineTo(50, 100); 
  triangle.lineTo(0, 0);
  triangle.lineTo(50, 0);
  triangle.endFill();
  triangle.interactive = true;
  triangle.buttonMode = true;
  triangle.on('click',deleteShape);
  return triangle
}

function drawStar(color,coordX, coordY=-50){
  const star = new PIXI.Graphics(); 
  star.lineStyle(0);
  star.beginFill(color, 1);
  star.drawStar(coordX,  coordY, 5, 50);
  star.endFill();
  star.interactive = true; 
  star.buttonMode = true; 
  star.on('click',deleteShape); 
  return star
}

function drawRect(color,coordX, coordY=-100){
  const rect = new PIXI.Graphics(); 
  rect.lineStyle(0);
  rect.beginFill(color, 1);
  rect.drawRect(coordX-50,  coordY-50, 100, 100);
  rect.endFill();
  rect.interactive = true; 
  rect.buttonMode = true; 
  rect.on('click',deleteShape); 
  return rect
}

function draw5sides(color,coordX, coordY=-100){
  const p = new PIXI.Graphics(); 
  p.lineStyle(0);
  p.beginFill(color, 1);
  p.drawStar(coordX, coordY, 5,50,40);
  p.endFill();
  p.interactive = true; 
  p.buttonMode = true; 
  p.on('click',deleteShape); 
  return p
}

function draw6sides(color,coordX, coordY=-100){
  const p = new PIXI.Graphics(); 
  p.lineStyle(0);
  p.beginFill(color, 1);
  p.drawStar(coordX, coordY, 3,50,50);
  p.endFill();
  p.interactive = true; 
  p.buttonMode = true; 
  p.on('click',deleteShape); 
  return p
}

const shapes =[drawCircle, drawTriangle, drawEllipse, drawStar, drawRect, draw5sides, draw6sides]

export default shapes;

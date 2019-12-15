import * as PIXI from 'pixi.js';
import shapes from './shapes';

class Model{
  width: number =  window.innerWidth < 500 ? window.innerWidth : window.innerWidth - 200;
  height: number = window.innerHeight - 200;
  shapesPerSecond: number = 1;
  gravity: number = 4;
  colors: number[] = [0xFFFF0B, 0xFF700B, 0x4286f4, 0x4286f4, 0xf441e8, 0x8dff6d, 0x41ccc9, 0xe03375, 0x95e032, 0x77c687, 0x43ba5b, 0x0ea3ba];
  counter: number = 0;
  wasDeleted?: boolean;
  app = new PIXI.Application({width: this.width, height: this.height});
  createCanvas(){
    document.querySelector('.wrapper').appendChild(this.app.view)
  };
draw(clickHandler, coordX = 50 + Math.floor(Math.random() * (this.width - 100)), coordY?){
  const color = this.colors[Math.floor(Math.random() * this.colors.length)];
  const shape = new shapes[Math.floor(Math.random() * shapes.length)](color, coordX, coordY).draw();
  shape.on('click', clickHandler);
  shape.on('tap', clickHandler);
  this.app.stage.addChild(shape);
};


}


export default new Model
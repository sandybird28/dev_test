import IModel from './interfaces/Imodel'

class Model implements  IModel{
  shapesPerSecond = 1;
  gravity = 4;
  colors = [0xFFFF0B, 0xFF700B, 0x4286f4, 0x4286f4, 0xf441e8, 0x8dff6d, 0x41ccc9, 0xe03375, 0x95e032, 0x77c687, 0x43ba5b, 0x0ea3ba];
  counter = 0;
  wasDeleted = false;
  changeGravity(value:boolean):void{
    this.gravity = value 
      ? this.gravity += 1
      : this.gravity == 0 
        ? this.gravity
        : this.gravity -= 1
  }
  changeShapesPerSecond(value:boolean):void{
    this.shapesPerSecond = value 
      ? this.shapesPerSecond += 1
      : this.shapesPerSecond == 1 
        ? this.shapesPerSecond
        : this.shapesPerSecond -= 1
  }
  getColor():number{
    return this.colors[Math.floor(Math.random() * this.colors.length)]
  }
}


export default  Model
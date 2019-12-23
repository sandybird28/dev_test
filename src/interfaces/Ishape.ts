
export default interface IShape{
  color: number;
  coordX: number;
  coordY: number;
  shape: PIXI.Graphics;
  draw():PIXI.Graphics;
  destroy():void;
}
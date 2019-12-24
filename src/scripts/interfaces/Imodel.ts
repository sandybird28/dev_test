export default interface IModel {
  shapesPerSecond: number;
  gravity: number;
  colors: number[];
  counter: number;
  wasDeleted: boolean;
  changeGravity(value:boolean):void;
  changeShapesPerSecond(value:boolean):void;
  getColor():number;
}
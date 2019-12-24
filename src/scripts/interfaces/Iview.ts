import IModel from './Imodel'


export default interface IView {
  wrapper: HTMLElement;
  gravValue: HTMLElement;
  spsValue: HTMLElement;
  numberOfShapes: HTMLElement;
  incSpS: HTMLElement;
  decSpS: HTMLElement;
  incGrav: HTMLElement;
  decGrav: HTMLElement;
  app: PIXI.Application;
  width: number;
  height: number;
  shapes: any[];
  update(data:IModel):void
  draw(color: number, coordX?: number, coordY?: any): void
  start():void;
}
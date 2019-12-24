import IView from '../interfaces/Iview'

class View implements IView {
  wrapper: HTMLElement = document.querySelector('.wrapper');
  gravValue: HTMLElement = document.getElementById("gravValue");
  spsValue: HTMLElement = document.getElementById("SpSValue");
  numberOfShapes: HTMLElement = document.getElementById("numberOfShapes");
  incSpS: HTMLElement = document.getElementById("incSpS");
  decSpS: HTMLElement = document.getElementById("decSpS");
  incGrav: HTMLElement = document.getElementById("incGrav");
  decGrav: HTMLElement = document.getElementById("decGrav");
  app: PIXI.Application;
  width: number;
  height: number;
  shapes: any[];
  constructor(app: PIXI.Application,shapes: any[] ){
    
    this.width = window.innerWidth < 500 ? window.innerWidth : window.innerWidth - 200;
    this.height  = window.innerHeight - 200; 
    this.app = app;
    this.shapes = shapes;
    this.app.stage.interactive = true;
    this.app.view.width = this.width;
    this.app.view.height = this.height;
  }

  draw(color:number, coordX = 50 + Math.floor(Math.random() * (this.width - 100)), coordY?){
    const shape = new this.shapes[Math.floor(Math.random() * this.shapes.length)](color, coordX, coordY).draw();
    this.app.stage.addChild(shape);
  };

  start():void {
    this.wrapper.appendChild(this.app.view)
  };

  update(data):void {
    data.counter += 1;
    if(data.counter == ~~( 50/data.shapesPerSecond) || Number(this.spsValue.innerText) != data.shapesPerSecond){
      this.draw(data.getColor())
      data.counter = 0
    }
    let children = this.app.stage.children
    for (let i = 0; i < children.length - 1; i++) {
      children[i].position.y += data.gravity;
      if(children[i].position.y > (this.height + 200)){
        this.app.stage.removeChild(children[i])
      }
      this.numberOfShapes.textContent = children.length.toString();
      this.spsValue.textContent = data.shapesPerSecond.toString();
      this.gravValue.textContent = data.gravity.toString();
    } 
  }
}


export default View
import Model from "./model";


class View  {
  wrapper: HTMLElement = document.querySelector('.wrapper');
  gravValue: HTMLElement = document.getElementById("gravValue");
  spsValue: HTMLElement = document.getElementById("SpSValue");
  numbreOfShapes: HTMLElement = document.getElementById("numbreOfShapes");
  incSpS: HTMLElement = document.getElementById("incSpS");
  decSpS: HTMLElement = document.getElementById("decSpS");
  incGrav: HTMLElement = document.getElementById("incGrav");
  decGrav: HTMLElement = document.getElementById("decGrav");
  model: Model;
  constructor(model: Model){
    this.model = model
  };

  start():void {
    this.wrapper.appendChild(this.model.app.view)
    this.model.app.ticker.add(this.update.bind(this));
  };

  update():void {
    this.model.counter += 1;
    if(this.model.counter == ~~( 50/this.model.shapesPerSecond) || Number(this.spsValue.innerText) != this.model.shapesPerSecond){
      this.model.draw()
      this.model.counter = 0
    }
    let children = this.model.app.stage.children
    for (let i = 0; i < children.length - 1; i++) {
      children[i].position.y += this.model.gravity;
      if(children[i].position.y > (this.model.height + 200)){
        this.model.app.stage.removeChild(children[i])
      }
      this.numbreOfShapes.textContent = children.length.toString();
      this.spsValue.textContent = this.model.shapesPerSecond.toString();
      this.gravValue.textContent = this.model.gravity.toString();
    } 
  }
}


export default View
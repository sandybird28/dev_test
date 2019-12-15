import model from './model'
import Controller from './controller'
const controller = new Controller; 



class View  {
  start():void {
    model.createCanvas();
    controller.init();
    model.app.ticker.add(() => {
      model.counter += 1;
      if(model.counter == ~~( 50/model.shapesPerSecond) || Number(this.spsValue.innerText) != model.shapesPerSecond){
        model.draw(Controller.deleteShape)
        model.counter = 0
      }
      let children = model.app.stage.children
      for (let i = 0; i < children.length - 1; i++) {
        children[i].position.y += model.gravity;
        if(children[i].position.y > model.height + 150){
          model.app.stage.removeChild(children[i])
        }
        this.numbreOfShapes.textContent = children.length.toString();
        this.spsValue.textContent = model.shapesPerSecond.toString();
        this.gravValue.textContent = model.gravity.toString();
      }        
    });
  };
  gravValue: HTMLElement = document.getElementById("gravValue");
  spsValue: HTMLElement = document.getElementById("SpSValue");
  numbreOfShapes: HTMLElement = document.getElementById("numbreOfShapes");
  incSpS: HTMLElement = document.getElementById("incSpS");
  decSpS: HTMLElement = document.getElementById("decSpS");
  incGrav: HTMLElement = document.getElementById("incGrav");
  decGrav: HTMLElement = document.getElementById("decGrav");
}


export default new View
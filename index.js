import * as PIXI from 'pixi.js';
import shapes from './shapes'

const model = {
  width: window.innerWidth < 500 ? window.innerWidth : window.innerWidth - 200,
  height: window.innerHeight - 200,
  createCanvas: () => {
    model.app = new PIXI.Application({width: model.width, hright: model.height}); 
    document.querySelector('.wrapper').appendChild(model.app.view)
  },
  draw: (coordX =50 + Math.floor(Math.random()* ( model.width - 100)), coordY) => {
    const color = model.colors[Math.floor(Math.random() * model.colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)](color, coordX, coordY);
    model.app.stage.addChild(shape);
  },
  shapesPerSecond: 1,
  gravity: 4,
  colors: [0xFFFF0B, 0xFF700B, 0x4286f4, 0x4286f4, 0xf441e8, 0x8dff6d, 0x41ccc9, 0xe03375, 0x95e032, 0x77c687, 0x43ba5b, 0x0ea3ba],

}

const view = {
  start: function() {
    model.createCanvas();
    controller.init();
    model.app.ticker.add(function() {
      view.counter += 1;
      if(view.counter == ~~( 50/model.shapesPerSecond)){
        model.draw()
        view.counter = 0
      }
      let children = model.app.stage.children
      for (let i = 0; i < children.length - 1; i++) {
        children[i].position.y += model.gravity;
        if(children[i].position.y > model.height + 150){
          model.app.stage.removeChild(children[i])
        }
        view.numbreOfShapes.textContent = children.length;
        view.spsValue.textContent = model.shapesPerSecond;
        view.gravValue.textContent = model.gravity;
      }        
    });
  },
  gravValue: document.getElementById("gravValue"),
  spsValue: document.getElementById("SpSValue"),
  numbreOfShapes: document.getElementById("numbreOfShapes"),
  counter: 0,
}


const controller = {
  init:()=>{
    //handle all listeners
    document.getElementById("incSpS").onclick = controller.incSpS;
    document.getElementById("decSpS").onclick = controller.decSpS;
    document.getElementById("incGrav").onclick = controller.incGrav;
    document.getElementById("decGrav").onclick = controller.decGrav;
    model.app.view.onclick = (e) => {model.wasDeleted ? model.wasDeleted = false : model.draw(e.layerX, e.layerY);}
    model.app.view.ontouchend = (e) => {e.preventDefault();model.wasDeleted ? model.wasDeleted = false : model.draw(e.changedTouches[0].clientX, e.changedTouches[0].clientY-50)}
  },
  deleteShape: function(){
    model.app.stage.removeChild(this)
    model.wasDeleted = true;
  },
  incSpS: ()=>{
    model.shapesPerSecond += 1
    view.counter = 0
  },
  decSpS: ()=>{
    model.shapesPerSecond -= 1  
    if(model.shapesPerSecond == 0){ model.shapesPerSecond = 1 }
    view.counter = 0
  },
  incGrav: ()=>{
    model.gravity++;
  },
  decGrav: ()=>{
    model.gravity--;
    if(model.gravity < 0){model.gravity++}
  },
}

view.start();

export const deleteShape = controller.deleteShape;

import * as PIXI from 'pixi.js';
import shapes from './shapes'
import {gravity, numbreOfShapes} from './controllers'

const width = window.innerWidth < 500 ? window.innerWidth : window.innerWidth - 200; 
const height = window.innerHeight - 200;
let app;
const colors = [0xFFFF0B, 0xFF700B, 0x4286f4, 0x4286f4, 0xf441e8, 0x8dff6d, 0x41ccc9, 0xe03375, 0x95e032, 0x77c687, 0x43ba5b, 0x0ea3ba];

const model = {
    createCanvas: () => {
        app = new PIXI.Application({width, height}); 
        console.log(app)
        document.querySelector('.wrapper').appendChild(app.view)
        // document.body.appendChild(app.view); 
        app.view.onclick = (e) => {window.wasDeleted ? window.wasDeleted = false : model.draw(e.layerX, e.layerY);}
        app.view.ontouchend = (e) => {e.preventDefault();window.wasDeleted ? window.wasDeleted = false : model.draw(e.changedTouches[0].clientX, e.changedTouches[0].clientY-50)}
    },
    draw: (coordX =50 + Math.floor(Math.random()* (width - 100)), coordY) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)](color, coordX, coordY);
        app.stage.addChild(shape);
    }

}

model.createCanvas();
window.run = setInterval(model.draw, 500); 

app.ticker.add(function() {
  let children = app.stage.children
    for (let i = 0; i < children.length - 1; i++) {
      children[i].position.y += gravity;
      if(children[i].position.y > height + 150){
        app.stage.removeChild(children[i])
      }
      numbreOfShapes.textContent = children.length
    }        
});

export const draw =  model.draw ;

export  function deleteShape(){
  app.stage.removeChild(this)
  window.wasDeleted = true;
}

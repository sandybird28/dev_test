import model from './model'
import view from './view'




class Controller {
  init(){
    //handle all listeners
    view.incSpS.onclick = this.incSpS;
    view.decSpS.onclick = this.decSpS;
    view.incGrav.onclick = this.incGrav;
    view.decGrav.onclick = this.decGrav;
    model.app.view.onclick = function(e){
      model.wasDeleted ? model.wasDeleted = false : model.draw(Controller.deleteShape, e.offsetX, e.offsetY);
    }
    model.app.view.ontouchend = (e) => {e.preventDefault();model.wasDeleted ? model.wasDeleted = false : model.draw(Controller.deleteShape, e.changedTouches[0].clientX, e.changedTouches[0].clientY-50)}
  };

  static deleteShape(){
    model.app.stage.removeChild(this)
    model.wasDeleted = true;
  };

  incSpS(){
    model.shapesPerSecond += 1
  };
  decSpS(){
    model.shapesPerSecond -= 1  
    if(model.shapesPerSecond == 0){ model.shapesPerSecond = 1 }
  };
  incGrav(){
    model.gravity++;
  };
  decGrav(){
    model.gravity--;
    if(model.gravity < 0){model.gravity++}
  };
}

export default  Controller
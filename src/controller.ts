
import Model from './model'
import View from './view'



class Controller {
  model: Model;
  view: View;
  constructor(model: Model, view: View){
    this.model = model;
    this.view = view;
  }
  init(){
    //handle all listeners
    this.view.incSpS.onclick = this.incSpS.bind(this);
    this.view.decSpS.onclick = this.decSpS.bind(this);
    this.view.incGrav.onclick = this.incGrav.bind(this);
    this.view.decGrav.onclick = this.decGrav.bind(this);
    this.model.app.view.onclick = (e)=>{
      this.model.wasDeleted ? this.model.wasDeleted = false : this.model.draw( e.offsetX, e.offsetY);
    };
    this.model.app.view.ontouchend = (e) => {e.preventDefault();this.model.wasDeleted ? this.model.wasDeleted = false : this.model.draw(e.changedTouches[0].clientX, e.changedTouches[0].clientY-50)}
  };


  incSpS(){
    this.model.changeShapesPerSecond(true)
  };
  decSpS(){
    this.model.changeShapesPerSecond(false)
  };
  incGrav(){
    this.model.changeGravity(true);
  };
  decGrav(){
    this.model.changeGravity(false);
  };
}

export default  Controller
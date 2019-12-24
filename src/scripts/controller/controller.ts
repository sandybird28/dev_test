import IController from '../interfaces/Icontroller'
import IModel from '../interfaces/Imodel'
import IView from '../interfaces/Iview'

class Controller implements IController {
  model: IModel;
  view: IView;
  constructor(model: IModel, view: IView){
    this.model = model;
    this.view = view;
    this.init()
  }
  init(){
    //handle all listeners
    this.view.incSpS.onclick = this.incSpS.bind(this);
    this.view.decSpS.onclick = this.decSpS.bind(this);
    this.view.incGrav.onclick = this.incGrav.bind(this);
    this.view.decGrav.onclick = this.decGrav.bind(this);
    this.view.app.view.onclick = (e)=>{
      this.model.wasDeleted ? this.model.wasDeleted = false : this.view.draw(this.model.getColor(), e.offsetX, e.offsetY);
    };
    this.view.app.stage.on("pointerdown", (e) => {
      e.target.destroy();
      this.model.wasDeleted = true 
    })
    this.view.app.view.ontouchend = (e) => {e.preventDefault();this.model.wasDeleted ? this.model.wasDeleted = false : this.view.draw(e.changedTouches[0].clientX, e.changedTouches[0].clientY-50)}
    this.view.app.ticker.add(() => this.view.update(this.model));

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
import IModel from './Imodel'
import IView from './Iview'

export default interface IController {
  model: IModel;
  view: IView;
  init():void;
  incSpS():void;
  decSpS():void;
  incGrav():void;
  decGrav():void;
}
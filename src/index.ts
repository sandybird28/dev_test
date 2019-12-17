import * as PIXI from 'pixi.js';
import Model from './model'
import View from './view'
import Controller from './controller'
import shapes from './shapes'

const app = new PIXI.Application();


const model = new Model();
const view = new View(app ,shapes);
const controller = new Controller(model, view);

view.start();

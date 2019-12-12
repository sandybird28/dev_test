"use strict";
exports.__esModule = true;
var PIXI = require("pixi.js");
var shapes_1 = require("./shapes");
var model = {
    width: window.innerWidth < 500 ? window.innerWidth : window.innerWidth - 200,
    height: window.innerHeight - 200,
    createCanvas: function () {
        model.app = new PIXI.Application({ width: model.width, height: model.height });
        document.querySelector('.wrapper').appendChild(model.app.view);
    },
    draw: function (clickHandler, coordX, coordY) {
        if (coordX === void 0) { coordX = 50 + Math.floor(Math.random() * (model.width - 100)); }
        var color = model.colors[Math.floor(Math.random() * model.colors.length)];
        var shape = shapes_1["default"][Math.floor(Math.random() * shapes_1["default"].length)](color, coordX, coordY);
        shape.on('click', clickHandler);
        shape.on('tap', clickHandler);
        model.app.stage.addChild(shape);
    },
    shapesPerSecond: 1,
    gravity: 4,
    colors: [0xFFFF0B, 0xFF700B, 0x4286f4, 0x4286f4, 0xf441e8, 0x8dff6d, 0x41ccc9, 0xe03375, 0x95e032, 0x77c687, 0x43ba5b, 0x0ea3ba]
};
var view = {
    start: function () {
        model.createCanvas();
        controller.init();
        model.app.ticker.add(function () {
            view.counter += 1;
            if (view.counter == ~~(50 / model.shapesPerSecond) || Number(view.spsValue.innerText) != model.shapesPerSecond) {
                model.draw(controller.deleteShape);
                view.counter = 0;
            }
            var children = model.app.stage.children;
            for (var i = 0; i < children.length - 1; i++) {
                children[i].position.y += model.gravity;
                if (children[i].position.y > model.height + 150) {
                    model.app.stage.removeChild(children[i]);
                }
                view.numbreOfShapes.textContent = children.length;
                view.spsValue.textContent = model.shapesPerSecond.toString();
                view.gravValue.textContent = model.gravity.toString();
            }
        });
    },
    gravValue: document.getElementById("gravValue"),
    spsValue: document.getElementById("SpSValue"),
    numbreOfShapes: document.getElementById("numbreOfShapes"),
    counter: 0
};
var controller = {
    init: function () {
        //handle all listeners
        document.getElementById("incSpS").onclick = controller.incSpS;
        document.getElementById("decSpS").onclick = controller.decSpS;
        document.getElementById("incGrav").onclick = controller.incGrav;
        document.getElementById("decGrav").onclick = controller.decGrav;
        model.app.view.onclick = function (e) { model.wasDeleted ? model.wasDeleted = false : model.draw(controller.deleteShape, e.layerX, e.layerY); };
        model.app.view.ontouchend = function (e) { e.preventDefault(); model.wasDeleted ? model.wasDeleted = false : model.draw(controller.deleteShape, e.changedTouches[0].clientX, e.changedTouches[0].clientY - 50); };
    },
    deleteShape: function () {
        model.app.stage.removeChild(this);
        model.wasDeleted = true;
    },
    incSpS: function () {
        model.shapesPerSecond += 1;
    },
    decSpS: function () {
        model.shapesPerSecond -= 1;
        if (model.shapesPerSecond == 0) {
            model.shapesPerSecond = 1;
        }
    },
    incGrav: function () {
        model.gravity++;
    },
    decGrav: function () {
        model.gravity--;
        if (model.gravity < 0) {
            model.gravity++;
        }
    }
};
view.start();

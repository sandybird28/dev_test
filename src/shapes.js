"use strict";
exports.__esModule = true;
var PIXI = require("pixi.js");
function drawCircle(color, coordX, coordY) {
    if (coordY === void 0) { coordY = -50; }
    var radius = 50;
    var circle = new PIXI.Graphics();
    circle.lineStyle(0);
    circle.beginFill(color, 1);
    circle.drawCircle(coordX, coordY, radius);
    circle.endFill();
    circle.interactive = true;
    circle.buttonMode = true;
    return circle;
}
function drawEllipse(color, coordX, coordY) {
    if (coordY === void 0) { coordY = -50; }
    var width = 70;
    var height = 50;
    var ellipse = new PIXI.Graphics();
    ellipse.lineStyle(0);
    ellipse.beginFill(color, 1);
    ellipse.drawEllipse(coordX, coordY, width, height);
    ellipse.endFill();
    ellipse.interactive = true;
    ellipse.buttonMode = true;
    return ellipse;
}
function drawTriangle(color, coordX, coordY) {
    if (coordY === void 0) { coordY = -50; }
    var triangle = new PIXI.Graphics();
    triangle.x = coordX - 50;
    triangle.y = coordY - 50;
    triangle.beginFill(color, 1);
    triangle.lineStyle(0);
    triangle.moveTo(100, 0);
    triangle.lineTo(50, 100);
    triangle.lineTo(0, 0);
    2;
    triangle.lineTo(50, 0);
    triangle.endFill();
    triangle.interactive = true;
    triangle.buttonMode = true;
    return triangle;
}
function drawStar(color, coordX, coordY) {
    if (coordY === void 0) { coordY = -50; }
    var star = new PIXI.Graphics();
    star.lineStyle(0);
    star.beginFill(color, 1);
    star.drawStar(coordX, coordY, 5, 50);
    star.endFill();
    star.interactive = true;
    star.buttonMode = true;
    return star;
}
function drawRect(color, coordX, coordY) {
    if (coordY === void 0) { coordY = -50; }
    var rect = new PIXI.Graphics();
    rect.lineStyle(0);
    rect.beginFill(color, 1);
    rect.drawRect(coordX - 50, coordY - 50, 100, 100);
    rect.endFill();
    rect.interactive = true;
    rect.buttonMode = true;
    return rect;
}
function draw5sides(color, coordX, coordY) {
    if (coordY === void 0) { coordY = -50; }
    var p = new PIXI.Graphics();
    p.lineStyle(0);
    p.beginFill(color, 1);
    p.drawStar(coordX, coordY, 5, 50, 40);
    p.endFill();
    p.interactive = true;
    p.buttonMode = true;
    return p;
}
function draw6sides(color, coordX, coordY) {
    if (coordY === void 0) { coordY = -50; }
    var p = new PIXI.Graphics();
    p.lineStyle(0);
    p.beginFill(color, 1);
    p.drawStar(coordX, coordY, 3, 50, 50);
    p.endFill();
    p.interactive = true;
    p.buttonMode = true;
    return p;
}
var shapes = [drawCircle, drawTriangle, drawEllipse, drawStar, drawRect, draw5sides, draw6sides];
exports["default"] = shapes;


const r = require("raylib");
const g = require("./geometry");
const outerRecX = 200;
const outerRecY = 100;
const outerWidth = 500;
const outerHeight = 300;
const innerWidth = 200;
const innerHeight = 100;

const innerX = g.newCoordinates(
    g.centerOfRectangleCoordinates(outerRecX, outerWidth), innerWidth,);
const innerY = g.newCoordinates(
    g.centerOfRectangleCoordinates(outerRecY, outerHeight), innerHeight,);

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(800, 500, "RayLib");
    r.SetTargetFPS(60);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(outerRecX, outerRecY, outerWidth, outerHeight, r.WHITE,);
    r.DrawRectangle(innerX, innerY, innerWidth, innerHeight, r.RED,);
    r.EndDrawing();

}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    draw,
    teardown,
};
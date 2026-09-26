
const r = require("raylib");
const g = require("./geometry");
const Width = 800;
const Height = 500;
const outerRecX = 200;
const outerRecY = 100;
const outerRecWidth = 500;
const outerRecHeight = 300;
const innerRecWidth = outerRecWidth * 0.8;
const innerRecHeight = outerRecHeight * 0.5;
const innerRecX = g.newCoordinates(
    g.centerOfRectangleCoordinates(outerRecX, outerRecWidth), innerRecWidth,
);
const innerRecY = g.newCoordinates(
    g.centerOfRectangleCoordinates(outerRecY, outerRecHeight), innerRecHeight,
);

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(Width, Height, "RayLib");
    r.SetTargetFPS(60);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(outerRecX, outerRecY, outerRecWidth, outerRecHeight, r.WHITE,);
    r.DrawRectangle(innerRecX, innerRecY, innerRecWidth, innerRecHeight, r.RED,);
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
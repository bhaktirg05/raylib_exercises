
const r = require("raylib");
const g = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "RayLib");
    r.SetTargetFPS(60);
}

const windowWidth = 800;
const windowHeight = 500;
const rectangleWidth = 600;
const rectangleHeight = 400;

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(
        g.centerPoint(windowWidth, rectangleWidth),
        g.centerPoint(windowHeight, rectangleHeight),
        rectangleWidth,
        rectangleHeight,
        r.WHITE,
    );
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
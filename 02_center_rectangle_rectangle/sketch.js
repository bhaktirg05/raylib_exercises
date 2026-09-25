
const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(800, 500, "RayLib");
    r.SetTargetFPS(60);
}

function update() {

}

function draw() {

}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
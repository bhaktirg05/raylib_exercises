
const r = require("raylib");
const g = require("./geometry");

const Width = 800;
const Height = 500;
const FPS = 60;
const sourceX = 100;
const sourceY = 400;
const target1_X = 600;
const target1_Y = 250;
const target2_X = 200;
const target2_Y = 150;
const radius = 20;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(Width, Height, "RayLib");
    r.SetTargetFPS(FPS);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(sourceX, sourceY, radius, r.BLUE);
    r.DrawCircle(target1_X, target1_Y, radius, r.RED);
    r.DrawCircle(target2_X, target2_Y, radius, r.GREEN);

    const distance1 = g.calculateDistance(
        sourceX, sourceY, target1_X, target1_Y,);
    const distance2 = g.calculateDistance(
        sourceX, sourceY, target2_X, target2_Y,);


    if (distance1 > distance2) {
        r.DrawLine(sourceX, sourceY, target2_X, target2_Y, r.BLACK,);
    } else {
        r.DrawLine(sourceX, sourceY, target1_X, target1_Y, r.BLACK,);
    }
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
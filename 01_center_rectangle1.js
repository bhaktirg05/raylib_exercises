const r = require("raylib");
const windowWidth = 800;
const windowHeight = 500;
const rectangleWidth = 600;
const rectangleHeight = 400;

function centerPoint(x, y) {
    return x / 2 - y / 2;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "RayLib");
    r.SetTargetFPS(60);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(
        centerPoint(windowWidth, rectangleWidth),
        centerPoint(windowHeight, rectangleHeight),
        rectangleWidth,
        rectangleHeight,
        r.WHITE,
    );
    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();

/*function centerPoint(x, y) {
    return x / 2 - y / 2;
}

const r = require("raylib");
const windowWidth = 800;
const windowHeight = 500;
const rectangleWidth = 600;
const rectangleHeight = 400;

r.InitWindow(windowWidth, windowHeight, "RayLib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(
        centerPoint(windowWidth, rectangleWidth),
        centerPoint(windowHeight, rectangleHeight),
        rectangleWidth,
        rectangleHeight,
        r.WHITE,
    );
    r.EndDrawing();
}

r.CloseWindow();
*/

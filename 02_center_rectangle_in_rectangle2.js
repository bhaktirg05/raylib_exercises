const r = require("raylib");
const outerRectangleX = 200;
const outerRectangleY = 100;
const outerRectangleWidth = 500;
const outerRectangleHeight = 300;
const innerRectangleWidth = 200;
const innerRectangleHeight = 100;

function centerOfRectangleCoordinates(x, y) {
    return x + y / 2;
}

function newCoordinates(x, y) {
    return x - y / 2;
}

function setup() {
    r.InitWindow(800, 500, "RayLib");
    r.SetTargetFPS(60);
}

function update() {
    // change the state
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(
        outerRectangleX,
        outerRectangleY,
        outerRectangleWidth,
        outerRectangleHeight,
        r.WHITE,
    );

    r.DrawRectangle(
        newCoordinates(
            centerOfRectangleCoordinates(outerRectangleX, outerRectangleWidth),
            innerRectangleWidth,
        ),
        newCoordinates(
            centerOfRectangleCoordinates(outerRectangleY, outerRectangleHeight),
            innerRectangleHeight,
        ),
        innerRectangleWidth,
        innerRectangleHeight,
        r.RED,
    );
    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();

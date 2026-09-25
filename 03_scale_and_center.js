function centerOfRectangleCoordinates(x, y) {
    return x + y / 2;
}

function newCoordinates(x, y) {
    return x - y / 2;
}

const r = require("raylib");
const outerRectangleX = 200;
const outerRectangleY = 100;
const outerRectangleWidth = 500;
const outerRectangleHeight = 300;
const innerRectangleWidth = outerRectangleWidth * 0.8;
const innerRectangleHeight = outerRectangleHeight * 0.8;

r.InitWindow(800, 500, "RayLib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
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

r.CloseWindow();

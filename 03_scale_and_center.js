function centerOfRectangleCoordinates(x, y) {
    return x + y / 2;
}

function newCoordinates(x, y) {
    return x - y / 2;
}

const r = require("raylib");
const outerRecX = 200;
const outerRecY = 100;
const outerRecWidth = 500;
const outerRecHeight = 300;
const innerRecWidth = outerRecWidth * 0.8;
const innerRecHeight = outerRecHeight * 0.8;
const innerRecX = newCoordinates(
    centerOfRectangleCoordinates(outerRecX, outerRecWidth),
    innerRecWidth,
);
const innerRecY = newCoordinates(
    centerOfRectangleCoordinates(outerRecY, outerRecHeight),
    innerRecHeight,
);

r.InitWindow(800, 500, "RayLib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(
        outerRecX,
        outerRecY,
        outerRecWidth,
        outerRecHeight,
        r.WHITE,
    );

    r.DrawRectangle(
        innerRecX,
        innerRecY,
        innerRecWidth,
        innerRecHeight,
        r.RED,
    );
    r.EndDrawing();
}

r.CloseWindow();

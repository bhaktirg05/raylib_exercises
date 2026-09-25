const r = require("raylib");

const circle1X = 100;
const circle1Y = 100;
const radii1 = 50;
const circle2X = 300;
const circle2Y = 100;
const radii2 = 90;
const windowWidth = 600;
const windowHeight = 500;

function distanceBetweenPoints(x1, y1, x2, y2) {
    return (((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5);
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Raylib");
    r.SetTargetFPS(60);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const distance = distanceBetweenPoints(circle1X, circle1Y, circle2X, circle2Y,);
    const totalRadii = radii1 + radii2;

    if (distance > totalRadii) {
        r.DrawCircle(circle1X, circle1Y, radii1, r.BLACK);
        r.DrawCircle(circle2X, circle2Y, radii2, r.BLACK);
    } else {
        r.DrawCircle(circle1X, circle1Y, radii1, r.RED);
        r.DrawCircle(circle2X, circle2Y, radii2, r.RED);
    }
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

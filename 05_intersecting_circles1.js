const r = require("raylib");

const windowWidth = 500;
const windowHeight = 400;
const FPS = 60;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "MyWindow");
    r.SetTargetFPS(FPS);
}

const circle1_X = windowWidth * 0.2;
const circle1_Y = windowHeight * 0.2;

const radius1 = 40;
const radius2 = 50

const circle2_X = windowWidth * 0.3;
const circle2_Y = windowHeight * 0.2;

function colorSelection(distance, radii) {
    return distance > radii ? r.BLACK : r.RED;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const distance = calculateDistance(circle1_X, circle1_Y, circle2_X, circle2_Y);
    const totalRadii = radius1 + radius2;
    const finalColor = colorSelection(distance, totalRadii);

    r.DrawCircle(circle1_X, circle1_Y, radius1, finalColor);
    r.DrawCircle(circle2_X, circle2_Y, radius2, finalColor);
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





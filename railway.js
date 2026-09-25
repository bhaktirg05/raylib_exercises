const r = require("raylib");

const windowWidth = 1500;
const windowHeight = 800;
function setup() {
    r.InitWindow(windowWidth, windowHeight, "Railway");
    r.SetTargetFPS(60);

}

const noOfBlocks = 2;
const engineWidth = 400;
const engineHeight = 200;
let baseX = - (engineWidth * noOfBlocks);
const baseY = (windowHeight / 2) - 150;
//const engineX = blockX + engineWidth + 30;
const engineY = windowHeight / 2;
const railColor = r.DARKGRAY;
const sqHeight = 150;
const sqWidth = 180;

function drawEngine(x) {
    r.DrawRectangle(x, engineY - sqHeight, sqWidth, sqHeight, railColor);
    r.DrawRectangle(x, engineY, engineWidth, engineHeight, railColor);

    const wheel1_X = x + engineWidth / 4;
    const wheel_Y = engineY + engineHeight;
    const wheelRadii = 60;

    r.DrawCircle(wheel1_X, wheel_Y, wheelRadii, r.BLACK);
    const wheel2_X = wheel1_X + engineWidth / 2;
    r.DrawCircle(wheel2_X, wheel_Y, wheelRadii, r.BLACK);
}

const blockHeight = engineHeight + 130;

function createBlock(xCoordinates, yCoordinates, number) {

    r.DrawRectangle(xCoordinates, yCoordinates, engineWidth, blockHeight, railColor);
    const wheel1_X = xCoordinates + engineWidth / 4;
    const wheel_Y = yCoordinates + blockHeight;
    const wheel2_X = wheel1_X + engineWidth / 2;

    const blockRadii = 80;
    r.DrawCircle(wheel1_X, wheel_Y, blockRadii, r.BLACK);
    r.DrawCircle(wheel2_X, wheel_Y, blockRadii, r.BLACK);

    r.DrawRectangle(0, wheel_Y + blockRadii, windowWidth, 20, r.GRAY);

    if (number === 0) {
        return drawEngine(xCoordinates + engineWidth + 20);
    }

    const newX = xCoordinates + engineWidth + 20;
    return createBlock(newX, yCoordinates, number - 1);

}

const treeX = 60;
const treeY = (windowHeight / 2) * 0.7;
const tWidth = 80;
const tHeight = 150;

function drawTree(x, number) {

    if (number === 0) {
        return;
    }
    r.DrawRectangle(x, treeY, tWidth, tHeight, r.DARKBROWN);
    const mc_X = x + 40;
    const mc_Y = treeY - 50;
    const tRadii = 80;
    const tc = r.GREEN;
    r.DrawCircle(mc_X, mc_Y, tRadii, tc);
    r.DrawCircle(mc_X - tRadii, mc_Y, tRadii, tc);
    r.DrawCircle(mc_X + tRadii, mc_Y, tRadii, tc);
    r.DrawCircle(mc_X, mc_Y - tRadii, tRadii, tc);

    return drawTree(x + 300, number - 1);

}

const noOfTrees = 1;
function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.WHITE);
    r.DrawRectangle(0, 0, windowWidth, windowHeight / 2, r.SKYBLUE);
    r.DrawCircle(300, 100, 80, r.YELLOW);
    r.DrawRectangle(0, windowHeight / 2, windowWidth, windowHeight / 2, r.LIGHTGRAY);

    drawTree(treeX, noOfTrees);
    createBlock(baseX, baseY, noOfBlocks);

    r.EndDrawing();
}

function update() {
    baseX = baseX + 2;
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
        update();
    }
}

function main() {
    setup();
    loop();
}

main();


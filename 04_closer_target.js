function calculateDistanceOfTwoPoints(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

const r = require("raylib");
const xOfSourceCircle = 100;
const yOfSourceCircle = 400;
const xOfTargetCircle1 = 600;
const yOfTargetCircle1 = 250;
const xOfTargetCircle2 = 200;
const yOfTargetCircle2 = 150;
const radiusOfCircle = 20;

r.InitWindow(800, 500, "RayLib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircle(xOfSourceCircle, yOfSourceCircle, radiusOfCircle, r.BLUE);
    r.DrawCircle(xOfTargetCircle1, yOfTargetCircle1, radiusOfCircle, r.RED);
    r.DrawCircle(xOfTargetCircle2, yOfTargetCircle2, radiusOfCircle, r.GREEN);

    if (
        calculateDistanceOfTwoPoints(
            xOfSourceCircle,
            yOfSourceCircle,
            xOfTargetCircle1,
            yOfTargetCircle1,
        ) >
        calculateDistanceOfTwoPoints(
            xOfSourceCircle,
            yOfSourceCircle,
            xOfTargetCircle2,
            yOfTargetCircle2,
        )
    ) {
        r.DrawLine(
            xOfSourceCircle,
            yOfSourceCircle,
            xOfTargetCircle2,
            yOfTargetCircle2,
            r.BLACK,
        );
    } else {
        r.DrawLine(
            xOfSourceCircle,
            yOfSourceCircle,
            xOfTargetCircle1,
            yOfTargetCircle1,
            r.BLACK,
        );
    }
    r.EndDrawing();
}

r.CloseWindow();

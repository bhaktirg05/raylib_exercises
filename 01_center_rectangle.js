const r = require("raylib");
const window_width = 800;
const window_height = 400;

r.InitWindow(window_width, window_height, "Rectangle_in_centre");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(
        window_width / 4,
        window_height / 4,
        window_width / 2,
        window_height / 2,
        r.WHITE,
    );
    r.EndDrawing();
}

r.CloseWindow();

/*function create_rectangle_in_center(x, y, width, height, color) {
    r.DrawRectangle(x / 4, y / 4, width / 2, height / 2, color);
    r.DrawRectangle()
} */

const r = require("raylib");
const rectangle_x = 100;
const rectangle_y = 100;
const rectangle_width = 400;
const rectangle_height = 200;

r.InitWindow(800, 600, "Center_rectangle_in_rectangle");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(
        rectangle_x,
        rectangle_y,
        rectangle_width,
        rectangle_height,
        r.WHITE,
    );
    r.DrawRectangle(
        rectangle_x + rectangle_x / 2,
        rectangle_y + rectangle_y / 2,
        rectangle_width / 2,
        rectangle_height / 2,
        r.RED,
    );

    r.EndDrawing();
}

r.CloseWindow();

/*create_rectangle_in_center(
        window_width,
        window_height,
        window_width,
        window_height,
        r.WHITE,
    );
    create_rectangle_in_center(
        window_width * 2,
        window_height * 2,
        window_width * 2,
        window_height * 2,
        r.RED,
    );*/

function calculateDistance(x1, y1, x2, y2) {
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
}
function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function centerOfRectangleCoordinates(x, y) {
    return x + y / 2;
}

function newCoordinates(x, y) {
    return x - y / 2;
}

module.exports = {
    calcOffset,
    centerOfRectangleCoordinates,
    newCoordinates,
    calculateDistance
};
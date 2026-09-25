function sqr(x) {
    return x * x;
}

function calculateDistance(x1, y1, x2, y2) {
    return (sqr(x2 - x1) + sqr(y2 - y1)) ** 0.5;
}

function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

module.exports = {
    calcOffset,
    calculateDistance,
    sqr,
};
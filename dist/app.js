"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    return Number.parseFloat((Math.pow(circleRadius, 2) * Math.sin(2 * Math.PI / numberOfSides) * numberOfSides / 2).toFixed(3));
}
exports.areaOfPolygonInsideCircle = areaOfPolygonInsideCircle;
let val = areaOfPolygonInsideCircle(3, 3);
//# sourceMappingURL=app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solve(m) {
    // your code;
    let a = m;
    let c = m;
    let b = -2 * m - 1;
    return (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
}
exports.solve = solve;
let val = solve(8);
//# sourceMappingURL=app.js.map
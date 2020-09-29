"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("teste");
function solve(s) {
    let uper = new RegExp("[A-Z]");
    let lower = new RegExp("[a-z]");
    let nUpper = s.split('').filter(s => uper.test(s)).length;
    let nLower = s.split('').filter(s => lower.test(s)).length;
    if (nLower > nUpper)
        return s.toLowerCase();
    if (nLower < nUpper)
        return s.toUpperCase();
    return s.toLowerCase();
}
exports.solve = solve;
var str = solve("AAAAggRR");
//# sourceMappingURL=app.js.map
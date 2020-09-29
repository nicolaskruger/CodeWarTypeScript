"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bouncingBall(h, bounce, window) {
    if (h <= window)
        return -1;
    let val = Math.floor(Math.log(window / h) / Math.log(bounce));
    let hn = h * Math.pow(bounce, val);
    let cont = 2 * val + (hn == window ? -2 : 0);
    return cont + 1;
}
exports.bouncingBall = bouncingBall;
bouncingBall(2, 0.5, 1);
//# sourceMappingURL=app.js.map
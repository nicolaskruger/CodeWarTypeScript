"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tribonacci([a, b, c], n) {
    // your code here
    let arr = new Array(a, b, c);
    let tribo = [...arr];
    if (n < 3)
        return arr.slice(0, n);
    for (let index = 3; index < n; index++) {
        let val = arr.reduce((s, j) => s + j);
        tribo.push(val);
        arr.push(val);
        arr.shift();
    }
    return tribo;
}
exports.tribonacci = tribonacci;
let l = tribonacci([1, 1, 1], 0);
//# sourceMappingURL=app.js.map
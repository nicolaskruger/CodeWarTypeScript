"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
}
G964.gps = (s, x) => {
    // your code
    if (x.length <= 1)
        return 0;
    let start = x[0];
    return Math.floor(x.map(t => {
        let val = start > t ? start - t : t - start;
        start = t;
        return val * 3600 / s;
    }).sort((n1, n2) => n1 - n2).pop());
};
exports.G964 = G964;
var x = [0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25];
var s = 12;
var u = G964.gps(s, x);
//# sourceMappingURL=app.js.map
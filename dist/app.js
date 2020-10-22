"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
    static gcdi(x, y) {
        // your code
        x = Math.abs(x);
        y = Math.abs(y);
        if (!y) {
            return x;
        }
        return G964.gcdi(y, x % y);
    }
    static lcmu(a, b) {
        // your code
        return Math.abs(a) * Math.abs(b) * G964.gcdi(a, b);
    }
    static som(a, b) {
        // your code
        return a + b;
    }
    static maxi(a, b) {
        // your code
        return a > b ? a : b;
    }
    static mini(a, b) {
        // your code
        return a < b ? a : b;
    }
    static operArray(fct, arr, init) {
        // your code
        return arr.map(s => {
            let val = fct(init, s);
            init = val;
            return val;
        });
    }
}
exports.G964 = G964;
var a = [18, 69, -90, -78, 65, 40];
let res = G964.operArray(G964.lcmu, a, a[0]);
let r = G964.lcmu(18, 18);
//# sourceMappingURL=app.js.map
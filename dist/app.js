"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const range = (start, end) => Array.from({ length: (end - start) }, (v, k) => k + start);
class G964 {
    static howmuch(m, n) {
        // your code
        [m, n] = n < m ? [n, m] : [m, n];
        let func = (s, a, b) => {
            let val = Math.trunc(s / a);
            let les = s - a * val;
            return val != 0 && les == b;
        };
        let c = range(m, n + 1).filter(s => func(s, 9, 1));
        let b = range(m, n + 1).filter(s => func(s, 7, 2));
        let cb = c.filter(s => b.indexOf(s) != -1);
        return cb.map(s => {
            return [`M: ${s}`, `B: ${Math.trunc(s / 7)}`, `C: ${Math.trunc(s / 9)}`];
        });
    }
}
exports.G964 = G964;
let l = G964.howmuch(10000, 9950);
//# sourceMappingURL=app.js.map
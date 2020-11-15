"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fact(n) {
    if (n == 0)
        return 1;
    return n * fact(n - 1);
}
function Dec(n) {
    let map = new Map();
    for (let s = 2; s <= n; s++) {
        while (n % s == 0) {
            if (map.has(s)) {
                map.set(s, map.get(s) + 1);
            }
            else
                map.set(s, 1);
            n /= s;
        }
    }
    return map;
}
function conc(a, b) {
    for (let [key, val] of a.entries()) {
        if (b.has(key)) {
            b.set(key, b.get(key) + val);
        }
        else {
            b.set(key, val);
        }
    }
    return b;
}
function Fac(n) {
    let map = new Map();
    for (let i = 2; i <= n; i++) {
        map = conc(map, Dec(i));
    }
    return map;
}
function decomp(n) {
    let map = Fac(n);
    let str = [...map.keys()].sort((a, b) => a - b)
        .map(s => `${s}${(map.get(s) == 1 ? '' : `^${map.get(s)}`)}`);
    return str.join(" * ");
}
exports.decomp = decomp;
decomp(25);
//# sourceMappingURL=app.js.map
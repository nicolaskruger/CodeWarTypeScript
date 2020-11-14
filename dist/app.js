"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lcm_two_numbers(x, y) {
    return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}
function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
function lcm(...list) {
    return oper(lcm_two_numbers, 1, ...list);
}
function gcd(...list) {
    return oper(gcd_two_numbers, list[0], ...list);
}
function oper(func, n, ...list) {
    return list.reduce((t, s) => func(t, s), n);
}
exports.convertFrac = (lst) => {
    let lista = lst.map(s => s[1]);
    let val = lcm(...lista);
    let li = lst.map(s => [s[0] * val / s[1], val]);
    let num = li.reduce((s, t) => s + t[0], 0);
    let gc = li.map(s => gcd_two_numbers(s[0], s[1]));
    let gcd_ = gcd(...gc);
    let l = li.map(s => `(${s[0] / gcd_},${s[1] / gcd_})`);
    return l.join('');
};
let valor = exports.convertFrac([[1, 2], [4, 5], [3, 4], [6, 9], [7, 10]]);
//# sourceMappingURL=app.js.map
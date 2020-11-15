"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function range(start = 0, end) {
    return [...Array(end + 1).keys()].slice(start);
}
function diviSor(num) {
    return range(0, num - 1).filter(s => num % s == 0);
}
function buddy(start, limit) {
    // your code
    let res = [];
    for (let s = start; s <= limit; s++) {
        let div = diviSor(s).reduce((t, s) => t + s, 0) - 1;
        let div1 = diviSor(div).reduce((t, s) => t + s, 0) - 1;
        if (s == div1) {
            return [s, div].sort((a, b) => a - b);
        }
    }
    return [];
}
exports.buddy = buddy;
let l = buddy(10, 50);
l = buddy(1071625, 1103735);
l = buddy(57345, 90061);
l = buddy(2382, 3679);
//# sourceMappingURL=app.js.map
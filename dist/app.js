"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumPairs(ints, s) {
    let set = new Set();
    if (ints.length < 2)
        return undefined;
    set.add(ints[0]);
    for (let i = 0; i < ints.length; i++) {
        const need = s - ints[i];
        if (set.has(need)) {
            return [need, ints[i]];
        }
        set.add(ints[i]);
    }
    return undefined; // your code here...
}
exports.sumPairs = sumPairs;
let val = sumPairs([11, 3, 7, 5], 10);
//# sourceMappingURL=app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumPairs(ints, s) {
    let best = ints.length;
    let val = undefined;
    for (let j = 0; j < (ints.length - 1); j++) {
        for (let i = j + 1; i < (ints.length); i++) {
            if ((ints[i] + ints[j]) == s) {
                if (i < best) {
                    best = i;
                    val = [ints[j], ints[i]];
                }
            }
        }
    }
    return val; // your code here...
}
exports.sumPairs = sumPairs;
let val = sumPairs([11, 3, 7, 5], 10);
//# sourceMappingURL=app.js.map
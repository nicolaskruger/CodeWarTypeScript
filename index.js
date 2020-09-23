"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dontGiveMeFive(start, end) {
    var n = Array.from({ length: (1 + end - start) }, function (v, k) { return k + start; })
        .filter(function (c) { return !c.toString().includes('5'); })
        .length;
    return n;
}
exports.dontGiveMeFive = dontGiveMeFive;
console.log("ola");
console.log(dontGiveMeFive(1, 9));
//# sourceMappingURL=index.js.map
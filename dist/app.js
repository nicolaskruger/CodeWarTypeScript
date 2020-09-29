"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function even_or_odd(n) {
    var dic = {
        0: "Odd",
        1: "Even"
    };
    return dic[n % 2];
}
exports.even_or_odd = even_or_odd;
for (let index = 0; index < 3; index++) {
    console.log(even_or_odd(index));
}
//# sourceMappingURL=app.js.map
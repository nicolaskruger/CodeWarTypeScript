"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bTs(b) {
    let num = 0;
    let n = 7;
    b.split("").forEach(s => {
        num |= Number.parseInt(s) << n;
        n--;
    });
    return String.fromCharCode(num);
}
exports.bTs = bTs;
function binaryToString(binary) {
    return binary.match(/.{8}/g).map(s => bTs(s)).join("");
}
exports.binaryToString = binaryToString;
let l = binaryToString("0110000101100001");
//# sourceMappingURL=app.js.map
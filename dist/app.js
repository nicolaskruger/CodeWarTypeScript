"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringTransformer(str) {
    return str.split('').map(s => /[A-Z]/.test(s) ? s.toLowerCase() : s.toUpperCase()).join('').split(' ').reverse().join(' ');
}
exports.stringTransformer = stringTransformer;
let val = stringTransformer("aAa BbB");
//# sourceMappingURL=app.js.map
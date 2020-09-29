"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/typescript
exports.digitize = (n) => (n.toString().split('').reverse().map(s => Number(s)));
const n = exports.digitize(123);
//# sourceMappingURL=app.js.map
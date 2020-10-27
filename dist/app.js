"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function rot90Clock(strng) {
    return diag1Sym(strng).split("\n").map(s => s.split('').reverse().join('')).join("\n");
}
exports.rot90Clock = rot90Clock;
function diag1Sym(strng) {
    let lenW = strng.split("\n")[0].length;
    return strng.split("\n").reduce((c, s) => {
        let ss = s.split('');
        c = c.map((v, i) => v += ss[i]);
        return c;
    }, Array(lenW).fill("")).join('\n');
}
exports.diag1Sym = diag1Sym;
function selfieAndDiag1(strng) {
    let a = strng.split('\n');
    let b = diag1Sym(strng).split('\n');
    return a.map((v, i) => `${v}|${b[i]}`).join('\n');
}
exports.selfieAndDiag1 = selfieAndDiag1;
function oper(fct, s) {
    return fct(s);
}
exports.oper = oper;
let val = selfieAndDiag1("abcd\nefgh\nijkl\nmnop");
//# sourceMappingURL=app.js.map
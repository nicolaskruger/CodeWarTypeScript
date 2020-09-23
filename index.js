"use strict";
exports.__esModule = true;
exports.accum = void 0;
function accum(s) {
    var i = 0;
    var str = s.split("").map(function (s) {
        return s.toUpperCase() + s.toLocaleLowerCase().repeat(i++);
    }).join("-");
    return str;
}
exports.accum = accum;
console.log('a'.repeat(10));

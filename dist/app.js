"use strict";
//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/typescript
Object.defineProperty(exports, "__esModule", { value: true });
function longestConsec(strarr, k) {
    let list = strarr.slice(0, k);
    let bestString = list.join("");
    strarr.forEach(el => {
        list.shift();
        list.push(el);
        let newString = list.join("");
        if (newString.length > bestString.length)
            bestString = newString;
    });
    return bestString;
}
exports.longestConsec = longestConsec;
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));
//# sourceMappingURL=app.js.map
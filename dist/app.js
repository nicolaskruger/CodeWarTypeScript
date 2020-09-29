"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/typescript
class Kata {
    static disemvowel(str) {
        return str.split('').filter(s => !"aeiouAEIOU".includes(s)).join("");
    }
}
exports.Kata = Kata;
var str = Kata.disemvowel("awwwqfqaegagdaAA");
//# sourceMappingURL=app.js.map
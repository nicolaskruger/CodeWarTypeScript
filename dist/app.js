"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
}
G964.primeFactors = (n) => {
    // your code
    let dict = new Map();
    let num = 2;
    while (n != 1) {
        if (n % num == 0) {
            n /= num;
            if (dict.has(num)) {
                dict.set(num, dict.get(num) + 1);
            }
            else {
                dict.set(num, 1);
            }
        }
        else {
            num++;
        }
    }
    let str = "";
    dict.forEach((v, k, m) => {
        if (v == 1) {
            str += `(${k})`;
        }
        else {
            str += `(${k}**${v})`;
        }
    });
    return str;
};
exports.G964 = G964;
G964.primeFactors(86240);
//# sourceMappingURL=app.js.map
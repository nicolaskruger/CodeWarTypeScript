"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
}
G964.primeFactors = (n) => {
    // your code
    let dict = {};
    let num = 2;
    while (n != 1) {
        if (n % num == 0) {
            n /= num;
            if (dict[num] != undefined) {
                dict[num]++;
            }
            else {
                dict[num] = 1;
            }
        }
        else {
            num++;
        }
    }
    let str = "";
    for (const key in dict) {
        if (dict[key] == 1) {
            str += `(${key})`;
        }
        else {
            str += `(${key}**${dict[key]})`;
        }
    }
    return str;
};
exports.G964 = G964;
G964.primeFactors(7775460);
//# sourceMappingURL=app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hist(s) {
    // your code
    let dic = s.split('').reduce((u, s) => {
        if ("uwxz".includes(s)) {
            if (u[s] == undefined) {
                u[s] = 1;
            }
            else {
                u[s]++;
            }
        }
        return u;
    }, {});
    let arr = [];
    for (const key in dic) {
        arr.push(`${key}  ${dic[key]}${' '.repeat(6 - dic[key].toString().length)}${'*'.repeat(dic[key])}`);
    }
    return arr.sort().join('\r');
}
exports.hist = hist;
let r = hist("uuaaaxbbbbyyhwawiwjjjwwxym");
//# sourceMappingURL=app.js.map
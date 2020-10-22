"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findUniq(arr) {
    // Do the magic
    let dic = {};
    arr.forEach(s => {
        if (dic[s] == undefined) {
            dic[s] = 1;
        }
        else {
            dic[s]++;
        }
        return s;
    });
    for (const key in dic) {
        if (dic[key] == 1) {
            return key;
        }
    }
    ;
    return 0;
}
exports.findUniq = findUniq;
findUniq([1, 1, 1, 2, 1, 1]);
//# sourceMappingURL=app.js.map
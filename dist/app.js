"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
    static splitArr(str, sz) {
        let arr = [];
        for (let i = 0; i < str.length; i += sz) {
            arr.push(str.slice(i, i + sz));
        }
        return arr;
    }
    static revrot(str, sz) {
        // your code
        if (sz <= 0 || str == "" || str.length < sz)
            return "";
        let st = G964.splitArr(str, sz);
        return st.map(s => {
            if (s.length < sz)
                return "";
            let num = s.split('').map(s => Number.parseInt(s)).reduce((add, curr) => curr * curr + add);
            if (num % 2 == 0) {
                return s.split('').reverse().join('');
            }
            let val = s.slice(1, s.length) + s[0];
            return val;
        }).join('');
    }
}
exports.G964 = G964;
let val = G964.revrot("563000655734469485", 4);
//# sourceMappingURL=app.js.map
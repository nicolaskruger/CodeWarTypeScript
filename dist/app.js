"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
    static isPrime(n) {
        let arr = [...Array(n).keys()];
        return arr.filter(s => (s != 0 && s != 1)).filter(s => n % s == 0).length == 0;
    }
    static Prime(m, n) {
        return [...Array(n + 1).keys()].filter(s => s >= m).filter(s => this.isPrime(s));
    }
}
G964.step = (g, m, n) => {
    // your code
    let a = G964.Prime(m, n);
    let b = [...a];
    a.pop();
    b.shift();
    return a.map((s, i) => [s, b[i]]).filter(s => (s[1] - s[0]) == g)[0];
};
exports.G964 = G964;
let val;
//val= G964.step(2,100,110)
//val= G964.step(4,100,110)
val = G964.step(6, 100, 110); //undefined
//val= G964.step(8,300,400)
//val= G964.step(10,300,400) //erro
//# sourceMappingURL=app.js.map
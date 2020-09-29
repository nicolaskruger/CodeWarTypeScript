"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
    static getAllDivisor(n) {
        return Array.from({ length: n }, (_, i) => i + 1).filter(v => (n % v == 0));
    }
    static squareSum(n) {
        return n.reduce((a, b) => a + b * b);
    }
    static isSquare(n) {
        var sqr = Math.sqrt(n);
        return ((sqr - Math.trunc(sqr)) == 0);
    }
    static range(start, end) {
        return Array(end - start + 1).fill(1).map((_, idx) => start + idx);
    }
}
G964.listSquared = (m, n) => {
    return G964.range(m, n).map(i => {
        let sum = G964.squareSum(G964.getAllDivisor(i));
        return [i, sum];
    }).filter(i => G964.isSquare(i[1]));
};
exports.G964 = G964;
var val = G964.listSquared(1, 250);
//# sourceMappingURL=app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
    static dec(n) {
        return Math.sqrt(Array.from(Array(n + 1).keys()).map(s => s * s).filter(s => s <= n).pop());
    }
}
G964.decompose = (n) => {
    // your code
    let vet = [];
    n = n * n;
    n--;
    let m = G964.dec(n);
    n++;
    n -= m * m;
    vet.push(m);
    while (n > 0) {
        m = G964.dec(n);
        n -= m * m;
        vet.push(m);
    }
    return vet.reverse();
};
exports.G964 = G964;
console.log("teste");
G964.decompose(50);
//# sourceMappingURL=app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
}
G964.productFib = (prod) => {
    var a = 0;
    var b = 1;
    while ((a * b) <= prod) {
        if ((a * b) == prod)
            return [a, b, true];
        var c = b + a;
        a = b;
        b = c;
    }
    return [a, b, false];
};
exports.G964 = G964;
console.log(G964.productFib(4895));
//# sourceMappingURL=app.js.map
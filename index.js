"use strict";
exports.__esModule = true;
exports.G964 = void 0;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.printerError = function (s) {
        return s.split('').filter(function (s) { return s > 'm'; }).length.toString() + "/" + s.length.toString();
    };
    return G964;
}());
exports.G964 = G964;
console.log(G964.printerError("aaaaaaaaaaaxxxaaaaaaaaa"));

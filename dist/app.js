"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Kata {
    static dnaStrand(dna) {
        var dic = {
            "A": "T",
            "T": "A",
            "G": "C",
            "C": "G"
        };
        return dna.split("").map(s => dic[s]).join("");
    }
}
exports.Kata = Kata;
var str = Kata.dnaStrand("AAAA");
//# sourceMappingURL=app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
    static partlist(arr) {
        let matrix = [];
        for (let i = 0; i < arr.length - 1; i++) {
            let a = arr.slice(0, i + 1).join(" ");
            let b = arr.slice(i + 1).join(" ");
            matrix[i] = [a, b];
        }
        return matrix;
    }
}
exports.G964 = G964;
G964.partlist(["I", "wish", "I", "hadn't", "come"]);
//# sourceMappingURL=app.js.map
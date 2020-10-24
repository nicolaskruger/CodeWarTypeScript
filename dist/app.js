"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
}
G964.stockList = (listOfArt, listOfCat) => {
    // your code
    let dic = {};
    listOfCat.forEach(element => {
        dic[element] = 0;
    });
    listOfArt.forEach(s => {
        let key = s[0];
        let val = Number.parseInt(s.match(/\d+/).toString());
        if (dic[key] != undefined) {
            dic[key] += val;
        }
    });
    let vet = [];
    for (const key in dic) {
        vet.push(`(${key} : ${dic[key]})`);
    }
    return vet.join(" - ");
};
exports.G964 = G964;
let b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
let c = ["A", "B", "C", "D"];
let d = G964.stockList(b, c);
//# sourceMappingURL=app.js.map
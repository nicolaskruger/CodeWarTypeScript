"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n = "NORTH";
const s = "SOUTH";
const w = "WEST";
const e = "EAST";
function giveMeTheList(num, word) {
    let lis = `${word} `.repeat(Math.abs(num)).split(' ');
    lis.pop();
    return lis;
}
exports.giveMeTheList = giveMeTheList;
function dirReduc(arr) {
    let red = arr.reduce((o, x) => {
        switch (x) {
            case n:
                o[0]++;
                break;
            case s:
                o[0]--;
                break;
            case e:
                o[1]++;
                break;
            case w:
                o[1]--;
                break;
            default:
                break;
        }
        return o;
    }, [0, 0]);
    let w0 = red[0] < 0 ? s : n;
    let w1 = red[1] < 0 ? w : e;
    let l0 = giveMeTheList(red[0], w0);
    let l1 = giveMeTheList(red[1], w1);
    if (arr.indexOf(w0) < arr.indexOf(w1))
        return l0.concat(l1);
    else
        return l1.concat(l0);
}
exports.dirReduc = dirReduc;
let red = dirReduc(['NORTH', 'EAST']);
//# sourceMappingURL=app.js.map
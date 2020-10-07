"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function next(curret, max) {
    return (curret + 1) % max;
}
exports.next = next;
function prev(curret, max) {
    return (curret - 1) == -1 ? (max - 1) : (curret - 1);
}
exports.prev = prev;
function streetFighterSelection(fighters, position, moves) {
    let vertilen = fighters.length;
    let horilen = fighters[0].length;
    let vet = [];
    moves.forEach(mv => {
        switch (mv) {
            case "left":
                position[0] = prev(position[0], horilen);
                break;
            case "right":
                position[0] = next(position[0], horilen);
                break;
            case "up":
                position[1] = (position[1] - 1) == -1 ? 0 : (position[1] - 1);
                break;
            case "down":
                position[1] = (position[1] + 1) == vertilen ? position[1] : (position[1] + 1);
                break;
            default:
                break;
        }
        vet.push(fighters[position[1]][position[0]]);
    });
    return vet;
}
exports.streetFighterSelection = streetFighterSelection;
let fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
let moves = ['up', 'left', 'right', 'left', 'left'];
streetFighterSelection(fighters, [0, 0], moves);
//# sourceMappingURL=app.js.map
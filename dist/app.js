"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class cube {
    constructor(m, i, j) {
        this.m = m;
        this.i = i;
        this.j = j;
        this.require = [
            i + 1 + (2 * m + 1) * j,
            (2 * j + 1) * m + j + i + 1,
            i + 1 + (2 * m + 1) * (j + 1),
            (2 * j + 1) * m + j + i + 2
        ];
    }
    compare(num) {
        let vet = this.require.filter(s => !num.has(s));
        if (vet.length == 1) {
            num.add(vet[0]);
        }
        return num;
    }
}
class Game {
    constructor(board) {
        this.cube = [];
        // Good luck
        this.board = board;
        for (let i = 0; i < board; i++)
            for (let j = 0; j < board; j++) {
                this.cube.push(new cube(board, i, j));
            }
    }
    play(lines) {
        // Good luck
        let b = true;
        let hash = new Set(lines);
        while (b) {
            b = false;
            for (let i = 0; i < this.cube.length; i++) {
                let lAfter = hash.size;
                hash = this.cube[i].compare(hash);
                let lBefore = hash.size;
                if (lAfter != lBefore)
                    b = true;
            }
        }
        let arr = Array.from(hash).sort((a, b) => a - b);
        return arr;
    }
}
exports.Game = Game;
let game = new Game(4);
let line = game.play([20, 21, 24, 26, 33, 34, 35, 38, 39]);
//# sourceMappingURL=app.js.map
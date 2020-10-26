var grid = [];
var current = Array(7).fill(5);
const red = 1;
const yellow = 2;
const draw = 0;
const decode = {
    0: "Draw",
    1: "Red",
    2: "Yellow",
    "Draw": 0,
    "Red": 1,
    "Yellow": 2,
};
const decodeLetter = (str) => (str.charCodeAt(0) - "A".charCodeAt(0));
function createGrid() {
    grid = [];
    current = Array(7).fill(5);
    for (let i = 0; i < 6; i++)
        grid.push([...Array(7).fill(0)]);
}
function printGrid() {
    grid.forEach(gg => {
        console.log(gg);
    });
}
function pushCard(color, pos) {
    if (current[pos] != -1) {
        let cur = current[pos];
        grid[cur][pos] = color;
        current[pos]--;
        return [cur, pos];
    }
    else {
        throw new Error();
    }
}
function line(y, x, dy, dx) {
    try {
        if (grid[y][x] == grid[y + dy][x + dx]) {
            return 1 + line(y + dy, x + dx, dy, dx);
        }
        return 0;
    }
    catch (error) {
        return 0;
    }
}
function win(y, x) {
    let yy = line(y, x, 1, 0) + 1 + line(y, x, -1, 0);
    let xx = line(y, x, 0, 1) + 1 + line(y, x, 0, -1);
    let dr = line(y, x, -1, -1) + 1 + line(y, x, 1, 1);
    let ur = line(y, x, 1, -1) + 1 + line(y, x, -1, 1);
    let arr = [yy, xx, dr, ur];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 4) {
            let v = grid[y][x];
            return v;
        }
    }
    return draw;
}
function whoIsWinner(piecesPositionList) {
    //return "Red", "Yellow" or "Draw"
    createGrid();
    for (const pp of piecesPositionList) {
        let val = pp.split("_");
        try {
            let vet = pushCard(decode[val[1]], decodeLetter(val[0]));
            let w = win(vet[0], vet[1]);
            if (w != draw)
                return decode[w];
        }
        catch (error) {
        }
    }
    ;
    return decode[draw];
}
let piecesPositionList = ["A_Yellow",
    "B_Red",
    "B_Yellow",
    "C_Red",
    "G_Yellow",
    "C_Red",
    "C_Yellow",
    "D_Red",
    "G_Yellow",
    "D_Red",
    "G_Yellow",
    "D_Red",
    "F_Yellow",
    "E_Red",
    "D_Yellow"];
let valor = whoIsWinner(piecesPositionList);
//# sourceMappingURL=app.js.map
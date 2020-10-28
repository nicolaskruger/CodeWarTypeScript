"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class points {
    constructor(s = 0, g = 0, w = 0, l = 0, t = 0, p = 0) {
        this.win = 0;
        this.lose = 0;
        this.tie = 0;
        this.played = 0;
        this.shot = 0;
        this.gothen = 0;
        this.win = w;
        this.lose = l;
        this.tie = t;
        this.played = p;
        this.shot = s;
        this.gothen = g;
    }
    get diff() { return this.shot - this.gothen; }
    get points() { return this.win * 3 + this.tie; }
    add(p) {
        return new points(this.shot + p.shot, this.gothen + p.gothen, this.win + p.win, this.lose + p.lose, this.tie + p.tie, this.played + p.played);
    }
}
class placar {
    constructor(time = "", point = new points()) {
        this.point = point;
        this.time = time;
    }
}
class dicPoint {
    constructor() {
        this.dic = {};
    }
    add(key, point) {
        if (this.dic[key] != undefined) {
            this.dic[key] = this.dic[key].add(point);
        }
        else {
            this.dic[key] = point;
        }
    }
    toList() {
        let li = [];
        for (const k in this.dic) {
            li.push(new placar(k, this.dic[k]));
        }
        return li;
    }
}
class partida {
    constructor(a = 0, b = 0, an = '', bn = '') {
        this.aPoint = a;
        this.bPoint = b;
        this.aName = an;
        this.bName = bn;
    }
    static transform(res) {
        return new partida(Number.parseInt(res[1]), Number.parseInt(res[2]), res[3], res[4]);
    }
}
function getPoinst(a, b) {
    let tie = [0, 0, 1, 1];
    let win = [1, 0, 0, 1];
    let lose = [0, 1, 0, 1];
    if (a == b) {
        return [new points(a, b, ...tie), new points(b, a, ...tie)];
    }
    if (a > b) {
        return [new points(a, b, ...win), new points(b, a, ...lose)];
    }
    return [new points(a, b, ...lose), new points(b, a, ...win)];
}
exports.getPoinst = getPoinst;
const comp = (a, b) => {
    if (a.point.points < b.point.points)
        return 1;
    if (a.point.points > b.point.points)
        return -1;
    if (a.point.diff < b.point.diff)
        return 1;
    if (a.point.diff > b.point.diff)
        return -1;
    if (a.point.shot < b.point.shot)
        return 1;
    if (a.point.shot > b.point.shot)
        return -1;
    return 0;
};
const comp2 = (a, b) => {
    let val = comp(a, b);
    if (val == 0) {
        if (a.time < b.time)
            return -1;
        if (a.time > b.time)
            return 1;
        return 0;
    }
    else {
        return val;
    }
};
function table(results) {
    let rege = /(-|\d+):(-|\d+) (.+) - (.+)/;
    let dic = new dicPoint();
    results.forEach(res => {
        let groups = rege.exec(res);
        let ptd = partida.transform(groups);
        if (groups[1] == '-') {
            dic.add(ptd.aName, new points());
            dic.add(ptd.bName, new points());
        }
        else {
            let d = getPoinst(ptd.aPoint, ptd.bPoint);
            dic.add(ptd.aName, d[0]);
            dic.add(ptd.bName, d[1]);
        }
    });
    let dci = dic.toList();
    dci.sort((a, b) => comp2(a, b));
    let cont = 1;
    let cc = 1;
    let ant = dci[0];
    let colocation = dci.reduce((c, s) => {
        let val = comp(ant, s);
        if (comp(ant, s) == 0) {
            c.push(cont);
        }
        else {
            cont = cc;
            c.push(cont);
        }
        ant = s;
        cc++;
        return c;
    }, []);
    return dci.map((s, i) => {
        let lenC = colocation[i].toString().length;
        let space = " ".repeat(30 - s.time.length);
        return `${" ".repeat(2 - lenC)}${colocation[i]}. ${s.time}${space}${s.point.played}  ${s.point.win}  ${s.point.tie}  ${s.point.lose}  ${s.point.shot}:${s.point.gothen}  ${s.point.points}`;
    }).join('\n');
    return "";
}
exports.table = table;
var results = [
    "6:0 FC Bayern Muenchen - Werder Bremen",
    "-:- Eintracht Frankfurt - Schalke 04",
    "-:- FC Augsburg - VfL Wolfsburg",
    "-:- Hamburger SV - FC Ingolstadt",
    "-:- 1. FC Koeln - SV Darmstadt",
    "-:- Borussia Dortmund - FSV Mainz 05",
    "-:- Borussia Moenchengladbach - Bayer Leverkusen",
    "-:- Hertha BSC Berlin - SC Freiburg",
    "-:- TSG 1899 Hoffenheim - RasenBall Leipzig"
];
let res = table(results);
//# sourceMappingURL=app.js.map
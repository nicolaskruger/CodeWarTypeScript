"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fibo(start, n, func) {
    for (let i = start.length; i < n; i++) {
        start.push(func(start));
    }
    return start;
}
function fibonanci(n) {
    return fibo([0, 1], n, (arr) => arr.slice(-2).reduce((t, v) => t + v, 0));
}
function padovan(n) {
    return fibo([1, 0, 0], n, (arr) => arr.slice(arr.length - 3, arr.length - 1).reduce((t, v) => t + v, 0));
}
function jacob(n) {
    let ii = [2, 1];
    return fibo([0, 1], n, (arr) => arr.slice(-2).reduce((t, v, i) => t + ii[i] * v, 0));
}
function pel(n) {
    let ii = [1, 2];
    return fibo([0, 1], n, (arr) => arr.slice(-2).reduce((t, v, i) => t + ii[i] * v, 0));
}
function tribonanci(n) {
    return fibo([0, 0, 1], n, (arr) => arr.slice(-3).reduce((t, v) => t + v, 0));
}
function tetrabonanci(n) {
    return fibo([0, 0, 0, 1], n, (arr) => arr.slice(-4).reduce((t, v) => t + v, 0));
}
class typeFib {
    constructor(func) {
        this.list = [];
        this.i = 0;
        this.func = func;
    }
    genereteVec(n) {
        this.list = this.func(n);
    }
}
function repeat(pattern, n) {
    let res = [];
    let i = 0;
    while (i < n) {
        res.push(pattern[(i++) % pattern.length]);
    }
    return res;
}
function mixbonacci(pattern, length) {
    // Implement me! :)
    let dic = {
        'fib': new typeFib(fibonanci),
        'pad': new typeFib(padovan),
        'jac': new typeFib(jacob),
        'pel': new typeFib(pel),
        'tri': new typeFib(tribonanci),
        'tet': new typeFib(tetrabonanci),
    };
    let v = repeat(pattern, length);
    for (const key in dic) {
        dic[key].genereteVec(v.filter(s => s == key).length);
    }
    return v.map(s => {
        let val = dic[s].list[dic[s].i];
        dic[s].i++;
        return val;
    });
}
exports.mixbonacci = mixbonacci;
let l = [];
l = mixbonacci(['fib'], 0); //, [])
l = mixbonacci(['fib'], 10); //, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
l = mixbonacci(['pad'], 10); //, [1, 0, 0, 1, 0, 1, 1, 1, 2, 2])
l = mixbonacci(['jac'], 10); //, [0, 1, 1, 3, 5, 11, 21, 43, 85, 171])
l = mixbonacci(['pel'], 10); //, [0, 1, 2, 5, 12, 29, 70, 169, 408, 985])
l = mixbonacci(['tri'], 10); //, [0, 0, 1, 1, 2, 4, 7, 13, 24, 44])
l = mixbonacci(['tet'], 10); //, [0, 0, 0, 1, 1, 2, 4, 8, 15, 29])
l = mixbonacci(['fib', 'tet'], 10); //, [0, 0, 1, 0, 1, 0, 2, 1, 3, 1])
l = mixbonacci(['jac', 'jac', 'pel'], 10); //, [0, 1, 0, 1, 3, 1, 5, 11, 2, 21])
//# sourceMappingURL=app.js.map
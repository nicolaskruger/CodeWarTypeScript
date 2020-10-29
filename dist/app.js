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
    ;
}
function pel(n) {
    return [];
}
function tribonanci(n) {
    return [];
}
function tetrabonanci(n) {
    return [];
}
function mixbonacci(pattern, length) {
    // Implement me! :)
    return [];
}
exports.mixbonacci = mixbonacci;
let fib = jacob(30);
//# sourceMappingURL=app.js.map
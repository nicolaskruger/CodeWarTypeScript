"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function number(busStops) {
    let inb = busStops.map(x => x[0]).reduce((y, x) => y + x);
    let ob = busStops.map(x => x[1]).reduce((y, x) => y + x);
    return inb - ob;
}
exports.number = number;
console.log(number([[10, 0], [3, 5], [5, 8]]));
//# sourceMappingURL=app.js.map
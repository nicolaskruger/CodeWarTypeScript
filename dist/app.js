"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
    static encodeChar(s, shift) {
        let val = '';
        if (/[A-Z]/.test(s))
            val = 'A';
        else if (/[a-z]/.test(s))
            val = 'a';
        else
            return s;
        return String.fromCharCode((s.charCodeAt(0) + shift - val.charCodeAt(0)) % 26 + val.charCodeAt(0));
    }
    static decodeChar(s, shift) {
        let val = '';
        if (/[A-Z]/.test(s))
            val = 'A';
        else if (/[a-z]/.test(s))
            val = 'a';
        else
            return s;
        let num = s.charCodeAt(0) - shift - val.charCodeAt(0);
        num = num < 0 ? (26 + num) : num;
        return String.fromCharCode(num + val.charCodeAt(0));
    }
}
G964.encodeStr = (s, shift) => {
    // your code
    let prefxi = [s[0].toLowerCase(), G964.encodeChar(s[0].toLowerCase(), 1)].join('');
    s = prefxi + s.split('').map(s => G964.encodeChar(s, shift)).join('');
    const add = s.length % 5 == 0 ? 0 : 1;
    let val = Math.trunc(s.length / 5) + add;
    console.log(s.length);
    let reg = new RegExp(`.{${val}}`, 'g');
    let math = s.match(reg);
    math.push(s.replace(math.join(''), ''));
    if (math[math.length - 1] == "")
        math.pop();
    return math;
};
G964.decode = (arr) => {
    // your code
    let str = arr.join('');
    let dif = Math.abs(str.toUpperCase().charCodeAt(0) - str.toUpperCase().charCodeAt(2));
    str = str.slice(2);
    return str.split('').map(s => G964.decodeChar(s, dif)).join('');
};
exports.G964 = G964;
let val = G964.encodeStr("I should have known that you would have a perfect answer for me!!!", 1);
let vel = G964.decode(val);
//# sourceMappingURL=app.js.map
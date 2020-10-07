"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptThis = (str) => {
    // Your code goes here
    if (str == "")
        return "";
    let st = str.split(" ");
    st = st.map(s => {
        if (s.length == 1) {
            return s[0].charCodeAt(0).toString();
        }
        let val = s[0].charCodeAt(0);
        s = s.slice(1);
        s = val + s[s.length - 1] + s.slice(1, s.length - 1) + s[0];
        return s;
    });
    return st.join(" ");
};
exports.encryptThis("");
exports.encryptThis("A");
exports.encryptThis("A wise old owl lived in an oak");
exports.encryptThis("The more he saw the less he spoke");
exports.encryptThis("The less he spoke the more he heard");
exports.encryptThis("Why can we not all be like that wise old bird");
exports.encryptThis("Thank you Piotr for all your help");
//# sourceMappingURL=app.js.map
//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/typescript

import { stringify } from "querystring";
import { start } from "repl";

export function longestConsec(strarr: string[], k: number): string {
    if(k<=0||k>strarr.length) return '';
    let list:string[] = strarr.slice(0,k);
    let bestString:string= list.join("");
    strarr.forEach(el => {
        list.shift();
        list.push(el);
        let newString:string = list.join("");
        if(newString.length>bestString.length) bestString=newString;
    });
    return bestString;
}

console.log(longestConsec(["zone","abigail","theta","form","libe","zas"], 2));
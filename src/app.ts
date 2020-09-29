// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/typescript
export class Kata {
    static disemvowel(str: string) {
        return str.replace(/[aeiou]/gi, "");
    }
}
var str:string= Kata.disemvowel("awwwqfqaegagdaAA");

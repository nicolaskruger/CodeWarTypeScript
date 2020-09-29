// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/typescript
export class Kata {
    static disemvowel(str: string) {
      return str.split('').filter(s => !"aeiouAEIOU".includes(s)).join("");
    }
}
var str:string= Kata.disemvowel("awwwqfqaegagdaAA");

export class Kata {
    static dnaStrand(dna: string) {
        return dna.replace(/./g, (c)=>({A:'T',T:'A',G:'C',C:'G'})[c]);
    }
  }
 
var str:string= Kata.dnaStrand("AAAA");

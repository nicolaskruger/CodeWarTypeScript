export class Kata {
    static dnaStrand(dna: string) {
        var dic:{[id:string]:string} = {
            "A":"T",
            "T":"A",
            "G":"C",
            "C":"G"
        }
        return dna.split("").map(s => dic[s]).join("");
    }
  }
 
var str:string= Kata.dnaStrand("AAAA");

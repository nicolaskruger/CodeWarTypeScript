

export class G964 {
    public static getAllDivisor(n:number):Array<number>{
        return Array.from({length: n}, (_, i) => i + 1).filter(v => (n%v==0));
    }
    public static squareSum(n:Array<number>):number{
        return n.reduce((a,b)=>a+b*b);
    }
    public static isSquare(n:number):boolean{
        var sqr= Math.sqrt(n);
        return ((sqr-Math.trunc(sqr))==0)
    }
    public static range(start:number, end:number):Array<number> {
        return Array(end - start + 1).fill(1).map((_, idx) => start + idx)
      }
    public static listSquared = (m, n) => {
        return G964.range(m,n).map(i =>{
            let sum = G964.squareSum(G964.getAllDivisor(i));
            return [i,sum]
        }).filter(i=> G964.isSquare(i[1]));
    }
}
var val = G964.listSquared(1, 250);

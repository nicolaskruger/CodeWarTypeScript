export function solequa(n: number): [number, number][] {
    let answare:Array<[number,number]> = [];
    let n_ = Math.trunc(Math.sqrt(n));
    for (let a = 1; a <= n_; a++) {
        if(n%a==0){
            let b = n/a;
            let x = (a + b) / 2;
            let y = (b - a) / 4;
            if(!Number.isInteger(x)||!Number.isInteger(y)) continue;
            answare.push([x,y])
        }
    }
    return answare;
}
let val= solequa(12);

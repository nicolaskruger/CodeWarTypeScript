export function dontGiveMeFive(start:number, end:number) : number
{
    var n: number =
    Array.from({length: (1+end - start)}, (v, k) => k + start)
        .filter(c => !c.toString().includes('5'))
        .length;
    return n;
}
console.log("ola");
console.log(dontGiveMeFive(1,9));
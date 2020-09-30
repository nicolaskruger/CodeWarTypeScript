export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    // your code here
    let arr = new Array<number>(a,b,c);
    let tribo = [...arr];
    if(n<3) return arr.slice(0,n);
    for (let index = 3; index < n; index++) {
        let val = arr.reduce((s,j) => s+j)
        tribo.push(val);
        arr.push(val);
        arr.shift();
    }
        
    return tribo;
}
let l = tribonacci([1, 1, 1], 0);

function fibo(start:number[],n:number,func:(arr:number[])=>number):Array<number> {
    for(let i = start.length;i<n;i++){
        start.push(func(start));
    }
    return start;
}

function fibonanci(n:number):Array<number>{
    return fibo([0,1],n,(arr:number[])=>arr.slice(-2).reduce((t,v)=>t+v,0))
}
function padovan(n:number):Array<number>{
    return fibo([1,0,0],n,(arr:number[])=>arr.slice(arr.length-3,arr.length-1).reduce((t,v)=>t+v,0));
}
function jacob(n:number):number[] {
    let ii=[2,1]
    return fibo([0, 1], n, (arr) => arr.slice(-2).reduce((t, v,i) => t + ii[i]*v, 0));;
}
function pel(n:number):Array<number>{
    return [];
}
function tribonanci(n:number):Array<number>{
    return [];
}
function tetrabonanci(n:number):Array<number>{
    return [];
}
export function mixbonacci (pattern: string[], length: number): number[] {
    // Implement me! :)
    return [];
}

let fib = jacob(30);


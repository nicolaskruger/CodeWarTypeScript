function fibo(start:number[],n:number,func:(arr:number[])=>number):Array<number> {
    for(let i = start.length;i<n;i++){
        start.push(func(start));
    }
    return start;
}

function fibonanci(n:number):Array<number>{
    return fibo([0,1],n,(arr:number[])=>arr.slice(-2).reduce((t,v)=>t+v,0));
}
function padovan(n:number):Array<number>{
    return fibo([1,0,0],n,(arr:number[])=>arr.slice(arr.length-3,arr.length-1).reduce((t,v)=>t+v,0));
}
function jacob(n:number):number[] {
    let ii=[2,1]
    return fibo([0, 1], n, (arr) => arr.slice(-2).reduce((t, v,i) => t + ii[i]*v, 0));
}
function pel(n:number):Array<number>{
    let ii=[1,2]
    return fibo([0, 1], n, (arr) => arr.slice(-2).reduce((t, v,i) => t + ii[i]*v, 0));
}
function tribonanci(n:number):Array<number>{
    return fibo([0,0,1],n,(arr:number[])=>arr.slice(-3).reduce((t,v)=>t+v,0));
}
function tetrabonanci(n:number):Array<number>{
    return fibo([0,0,0,1],n,(arr:number[])=>arr.slice(-4).reduce((t,v)=>t+v,0));
}
class typeFib {
    list:number[]=[];
    i:number=0;
    func:(arr:number)=>number[]
    constructor(func:(arr:number)=>number[]){
        this.func = func;
    }
    genereteVec(n:number){
        this.list = this.func(n);
    } 
}


function repeat(pattern: string[],n:number){
    let res:string[]=[];
    let i = 0
    while(i<n){
        res.push(pattern[(i++)%pattern.length]);
    }
    return res;
}
export function mixbonacci (pattern: string[], length: number): number[] {
    // Implement me! :)
    let  dic:{[key:string]:typeFib}={
        'fib' : new typeFib(fibonanci),
        'pad' : new typeFib(padovan),
        'jac' : new typeFib(jacob),
        'pel' : new typeFib(pel),
        'tri' : new typeFib(tribonanci),
        'tet' : new typeFib(tetrabonanci),
    }
    let v = repeat(pattern,length);
    for(const key in dic){
        dic[key].genereteVec(v.filter(s => s==key).length);
    }
    return v.map(s =>{
        let val = dic[s].list[dic[s].i];
        dic[s].i++;
        return val;
    });
}
let l:number[]=[]
l= mixbonacci(['fib'], 0)//, [])
l= mixbonacci(['fib'], 10)//, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
l= mixbonacci(['pad'], 10)//, [1, 0, 0, 1, 0, 1, 1, 1, 2, 2])
l= mixbonacci(['jac'], 10)//, [0, 1, 1, 3, 5, 11, 21, 43, 85, 171])
l= mixbonacci(['pel'], 10)//, [0, 1, 2, 5, 12, 29, 70, 169, 408, 985])
l= mixbonacci(['tri'], 10)//, [0, 0, 1, 1, 2, 4, 7, 13, 24, 44])
l= mixbonacci(['tet'], 10)//, [0, 0, 0, 1, 1, 2, 4, 8, 15, 29])
l= mixbonacci(['fib', 'tet'], 10)//, [0, 0, 1, 0, 1, 0, 2, 1, 3, 1])
l= mixbonacci(['jac', 'jac', 'pel'], 10)//, [0, 1, 0, 1, 3, 1, 5, 11, 2, 21])

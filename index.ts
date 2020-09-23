export function accum(s: string):string {
    var i: number=0;
    var str:string =
    s.split("").map( s =>{
        return s.toUpperCase()+s.toLocaleLowerCase().repeat(i++);
    }).join("-");
    return str;
}
console.log('a'.repeat(10));
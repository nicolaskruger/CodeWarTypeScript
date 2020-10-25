const n = "NORTH";
const s = "SOUTH";
const w = "WEST";
const e = "EAST";
const oposit = {
    "NORTH": s,
    "SOUTH": n,
    "WEST": e,
    "EAST": w
};
export function dirReduc(arr: string[]): string[] {
   let brr= arr.reduce((o,x)=>{
        let last = o[o.length-1];
        if(last==undefined){
            o.push(x)
            return o;
        }
        let op = oposit[last];
        if(oposit[last]==x){
            o.pop()
            return o;
        }
        o.push(x);
        return o;
   },[]);
   if(brr.length==arr.length){
       return arr;
   }
   return dirReduc([...brr]);
}
let red = dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);

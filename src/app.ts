function fact(n){
  if(n==0) return 1;
  return n*fact(n-1);
}
function Dec(n:number){
  let map = new Map<number,number>();
  for(let s=2;s<=n;s++){
    while(n%s==0){
      if(map.has(s)){
        map.set(s,map.get(s)+1);
      }else
        map.set(s,1);
      n/=s;
    }
  }
  return map;
}
function conc(a:Map<number,number>,b:Map<number,number>){
  for(let [key,val] of a.entries()){
    if(b.has(key)){
      b.set(key,b.get(key)+val);
    }else{
      b.set(key,val);
    }
  }
  return b;
}
function Fac(n:number){
  let map = new Map<number,number>();
  for(let i = 2;i<=n;i++){
    map = conc(map,Dec(i));
  }
  return map
}
export function decomp(n: number): string {
  let map = Fac(n);
  
  let str =[...map.keys()].sort((a,b)=>a-b)
          .map(s =>`${s}${(map.get(s)==1?'':`^${map.get(s)}`)}`);
  return str.join(" * ");
}

decomp(25)
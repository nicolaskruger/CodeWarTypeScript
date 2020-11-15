export function sumPairs(ints: number[], s: number): [number, number] | void { 
  let set = new Set<number>();
  if(ints.length<2) return undefined;
  set.add(ints[0]);
  for (let i = 1; i < ints.length; i++) {
    const need = s - ints[i];
    if(set.has(need)){
      return [need,ints[i]];
    } 
    set.add(ints[i]);
  }
  
  return undefined; // your code here...
}

let val = sumPairs([11, 3, 7, 5],10)

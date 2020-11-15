export function sumPairs(ints: number[], s: number): [number, number] | void { 
  let best = ints.length;
  let val:any = undefined;
  for(let j=0;j<(ints.length-1);j++){
    for(let i=j+1;i<(ints.length);i++){
      if((ints[i]+ints[j])==s){
        if(i<best){
          best=i;
          val = [ints[j],ints[i]];
        }
      }
    } 
  } 
  return val // your code here...
}

let val = sumPairs([11, 3, 7, 5],10)

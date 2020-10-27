function subset(arra, arra_size):Array<Array<any>>
 {
    var result_set = [], 
        result;
    
   
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    let i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

export function chooseBestSum(t: number, k: number, ls: number[]): number | null {
  // your code
  if(ls.length<k) return null; 
  let arr = subset(ls,k).filter(s => s.length==k).map(s=>s.reduce((c,s)=>c+s,0)).filter(s=> s<=t);
  arr.sort();

  return arr[arr.length-1];
}
let lt = subset([1, 2, 3], 2).filter(s => s.length==2);
let t = chooseBestSum(163, 3, [50, 55, 56, 57, 58]);

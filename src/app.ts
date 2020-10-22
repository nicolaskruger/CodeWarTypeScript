export function findUniq(arr: number[]): number {
    // Do the magic
    let dic: {[key:number]:number} = {}
    arr.forEach(s =>{
        if(dic[s]==undefined){
            dic[s]=1;
        }
        else{
            dic[s]++;
        }
        return s;
    });

    for (const key in dic) {
        if (dic[key]==1) {
            return Number.parseFloat(key);
            
        }
    };
    return 0;
  }
  findUniq([ 1, 1, 1, 2, 1, 1 ])
export function findShort(s: string): number {
    var str: string=
    s.split(' ').sort( (a,b)=>{
        if(a.length<b.length){
            return -1;
        }else if(a.length>b.length){
            return 1;
        }else return 0;
    })[0];
    return str.length;
  }
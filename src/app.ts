

export function even_or_odd(n:number):String {
    if(n<0) n=-n;
    var dic = {
          0:"Even",
          1:"Odd"
      }
    return dic[n%2];
}
for (let index = 0; index < 3; index++) {
    console.log(even_or_odd(index));    
}

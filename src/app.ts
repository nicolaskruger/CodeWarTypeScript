export class G964 {

    public static productFib = (prod) => {
      var a = 0;
      var b = 1;
      while((a*b)<=prod){
        if((a*b)==prod) return [a,b,true];
        var c = b+a;
        a = b;
        b = c;
      }
      return [a,b,false];
    }
}

console.log(G964.productFib(4895));
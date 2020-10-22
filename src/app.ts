export class G964 {
    public static gcdi(x: number, y: number): number {
        // your code
        x = Math.abs(x);
        y = Math.abs(y);
        if (!y) {
            return x;
          }
        
          return G964.gcdi(y, x % y);
    }
    public static lcmu(a: number, b: number): number {
        // your code
        return Math.abs(a)*Math.abs(b)/G964.gcdi(a,b);
    }
    public static som(a: number, b: number) {
        // your code
        return a+b;
    }
    public static maxi(a: number, b: number) {
        // your code
        return a>b?a:b;
    }
    public static mini(a: number, b: number) {
        // your code
        return a<b?a:b;
    }
    public static operArray(fct, arr, init) {
        // your code
        return arr.map(s =>{
            let val = fct(init,s);
            init = val;
            return val;
        });
    }
} 
var a = [ 18, 69, -90, -78, 65, 40 ];
let res = G964.operArray(G964.lcmu, a, a[0]);
let r = G964.lcmu(18, 18);


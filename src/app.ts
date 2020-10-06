export class G964 {
  public static productFib = (prod:number) => {
    let p1:number = 1, p2:number = 1;
    while (p1 * p2 < prod) [p1, p2] = [p2, p1+p2];
    return [p1 , p2, (p1 * p2 == prod)]; 
  }
}

console.log(G964.productFib(4895));
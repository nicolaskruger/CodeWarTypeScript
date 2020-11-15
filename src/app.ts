export function solve(m: number): number {
  // your code;
  let a =m;
  let c =m;
  let b = -2 * m - 1;
    
    return (-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
}
let val = solve(8);

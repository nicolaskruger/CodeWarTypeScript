export function fact(n: number): number {
    if(n<=0) return 1;
    return n*fact(n-1);    
}
export function diagonal(n: number, p: number): number {
    n+=1;
    p+=1;
    return Math.round(fact(n)/(fact(p)*fact(n-p)));
}
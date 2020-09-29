console.log("teste");

export function solve(s: string) {
    let uper:RegExp = new RegExp("[A-Z]");
    let lower:RegExp = new RegExp("[a-z]");
    let nUpper= s.split('').filter(s => uper.test(s)).length;
    let nLower= s.split('').filter(s => lower.test(s)).length;
    if(nLower>nUpper) return s.toLowerCase();
    if(nLower<nUpper) return s.toUpperCase();
    return s.toLowerCase();
}


var str = solve("AAAAggRR");

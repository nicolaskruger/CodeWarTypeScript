export function rot90Clock(strng: string): string {
  return diag1Sym(strng).split("\n").map(s => s.split('').reverse().join('')).join("\n");
}

export function diag1Sym(strng: string): string {
  let lenW = strng.split("\n")[0].length
  return strng.split("\n").reduce((c,s)=>{
    let ss = s.split('');
    c= c.map((v,i)=>v+=ss[i]);
    return c;
  },Array<string>(lenW).fill("")).join('\n');
}

export function selfieAndDiag1(strng: string): string {
  let a = strng.split('\n');
  let b = diag1Sym(strng).split('\n');
  return a.map((v,i) => `${v}|${b[i]}`).join('\n');
}

export function oper(fct: (s: string) => string, s: string): string {
  return fct(s);
}

let val = selfieAndDiag1("abcd\nefgh\nijkl\nmnop");

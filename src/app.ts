export function stringTransformer(str: string) {
    return str.split('').map(s => /[A-Z]/.test(s)?s.toLowerCase():s.toUpperCase()).join('').split(' ').reverse().join(' ');    
}

let val = stringTransformer("aAa BbB");

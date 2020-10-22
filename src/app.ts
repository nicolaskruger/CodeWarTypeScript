export function bTs(b:string){
    let num =0;
    let n = 7
    b.split("").forEach(s => {
        num |= Number.parseInt(s)<<n;
        n--;
    })
    return String.fromCharCode(num);
}

export function binaryToString(binary: string) {
    
    return binary.match(/.{8}/g).map(s => bTs(s)).join("");
    
}

let l = binaryToString("0110000101100001");

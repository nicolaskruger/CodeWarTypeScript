
export function binaryToString(binary: string) {
    
    return binary.replace(/[01]{8}/g, s => String.fromCharCode(parseInt(s, 2)));
}


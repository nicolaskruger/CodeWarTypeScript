export function dirReduc(arr: string[]): string[] {
    var pat = /(NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST)/;
    var way = arr.join('');
    while( pat.test(way) ) way = way.replace(pat,'');
    return way.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
  }
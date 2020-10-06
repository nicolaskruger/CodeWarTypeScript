export function number(busStops: [number, number][]): number {
  let inb:number = busStops.map(x => x[0]).reduce((y,x)=>y+x);
  let ob:number = busStops.map(x => x[1]).reduce((y,x)=>y+x);
  return inb-ob;
}
console.log(number([[10,0],[3,5],[5,8]]));
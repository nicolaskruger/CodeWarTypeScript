export function bouncingBall(h: number, bounce: number, window: number): number {
    let cont:number =0;
    while(h*bounce>window){
        h*=bounce;
        cont+=2;
    }
    return cont+1;
  }
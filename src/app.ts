import { match } from "assert";
export function bouncingBall(h: number, bounce: number, window: number): number {
    if(h<=window) return -1;  
    let val:number =Math.floor(Math.log(window/h)/Math.log(bounce));
    let hn = h*Math.pow(bounce,val);
    let cont:number =2*val +(hn==window?-2:0);
    if(cont<0||isNaN(cont)) return -1;
    return cont+1;
  }
bouncingBall(2,0.5,1)